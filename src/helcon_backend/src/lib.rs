#[macro_use]
extern crate serde;

use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};

mod models;
use models::{
    Appointment, Availability, Calendly, Data, DocIdentity, Doctor, Identity, MedicalRecord,
    Message, MultiMediaContent, Patient, Report,
};

type Memory = VirtualMemory<DefaultMemoryImpl>;
type IdCell = Cell<u64, Memory>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
        MemoryManager::init(DefaultMemoryImpl::default())
    );

    static ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
            .expect("Cannot create a counter")
    );

    static PATIENT_STORAGE: RefCell<StableBTreeMap<u64, Patient, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
    ));

    static APPOINTMENT_STORAGE: RefCell<StableBTreeMap<u64, Appointment, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2)))
    ));

    static MESSAGE_STORAGE: RefCell<StableBTreeMap<u64, Message, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3)))
    ));

    static MEDICAL_RECORD_STORAGE: RefCell<StableBTreeMap<u64, MedicalRecord, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(4)))
    ));

    static DOCTOR_STORAGE: RefCell<StableBTreeMap<u64, Doctor, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(5)))
    ));

    static REPORT_STORAGE: RefCell<StableBTreeMap<u64, Report, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(6)))
    ));

    static IDENTITY_STORAGE: RefCell<StableBTreeMap<u64, Identity, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(7)))
    ));

    static DOCIDENTITY_STORAGE: RefCell<StableBTreeMap<u64, DocIdentity, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(8)))
    ));

    static CALENDLY_STORAGE: RefCell<StableBTreeMap<u64, Calendly, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(9)))
    ));

    static DATA_STORAGE: RefCell<StableBTreeMap<u64, Data, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(10)))
    ));

    static AVAILABILITY_STORAGE: RefCell<StableBTreeMap<u64, Availability, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(11)))
));

}

#[derive(candid::CandidType, Deserialize, Serialize)]
enum Error {
    NotFound { msg: String },
    InvalidInput { msg: String },
    Unauthorized { msg: String },
    AppointmentConflict { msg: String },
    AlreadyExists { msg: String },
}

#[ic_cdk::query]
fn get_patient(patient_id: u64) -> Result<Patient, Error> {
    match _get_patient(&patient_id) {
        Some(patient) => Ok(patient),
        None => Err(Error::NotFound {
            msg: format!("patient with id={} not found", patient_id),
        }),
    }
}

#[ic_cdk::update]
fn add_docidentity(principal: String) -> Result<DocIdentity, Error> {
    // Validate input data
    if principal.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Principal cannot be empty".to_string(),
        });
    }

    // Check if the principal already exists
    let exists = DOCIDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, docidentity)| docidentity.principal == principal)
    });

    if exists {
        return Err(Error::AlreadyExists {
            msg: "Principal already exists".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let docidentity = DocIdentity { id, principal };

    DOCIDENTITY_STORAGE.with(|service| service.borrow_mut().insert(id, docidentity.clone()));
    Ok(docidentity)
}

#[ic_cdk::query]
fn get_docidentity(docidentity_id: u64) -> Result<DocIdentity, Error> {
    match DOCIDENTITY_STORAGE.with(|storage| storage.borrow().get(&docidentity_id)) {
        Some(docidentity) => Ok(docidentity.clone()),
        None => Err(Error::NotFound {
            msg: format!("DocIdentity with id={} not found", docidentity_id),
        }),
    }
}

#[ic_cdk::query]
fn list_docidentities() -> Vec<DocIdentity> {
    DOCIDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, docidentity)| docidentity.clone())
            .collect()
    })
}

#[ic_cdk::query]
fn does_docidentity_exist(principal: String) -> bool {
    // Get the list of identities
    let identities = list_docidentities();

    // Iterate through the identities and check if the input_principal exists
    for identity in identities {
        if identity.principal == principal {
            return true; // Identity exists
        }
    }

    false // Identity does not exist
}

#[ic_cdk::update]
fn add_identity(principal: String) -> Result<Identity, Error> {
    // Validate input data
    if principal.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Principal cannot be empty".to_string(),
        });
    }

    // Check if the principal already exists
    let exists = IDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, identity)| identity.principal == principal)
    });

    if exists {
        return Err(Error::AlreadyExists {
            msg: "Principal already exists".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let identity = Identity { id, principal };

    IDENTITY_STORAGE.with(|service| service.borrow_mut().insert(id, identity.clone()));
    Ok(identity)
}

#[ic_cdk::query]
fn get_identity(identity_id: u64) -> Result<Identity, Error> {
    match _get_identity(&identity_id) {
        Some(identity) => Ok(identity),
        None => Err(Error::NotFound {
            msg: format!("Identity with id={} not found", identity_id),
        }),
    }
}

#[ic_cdk::query]
fn list_identities() -> Vec<Identity> {
    IDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, identity)| identity.clone())
            .collect()
    })
}

#[ic_cdk::query]
fn does_identity_exist(input_principal: String) -> bool {
    // Get the list of identities
    let identities = list_identities();

    // Iterate through the identities and check if the input_principal exists
    for identity in identities {
        if identity.principal == input_principal {
            return true; // Identity exists
        }
    }

    false // Identity does not exist
}

#[ic_cdk::update]
fn register_patient(username: String, identity_id: u64) -> Result<Patient, Error> {
    // Validate input data
    if username.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Name cannot be empty".to_string(),
        });
    }

    // Check if the username already exists
    let username_exists = PATIENT_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, patient)| patient.username == username)
    });

    if username_exists {
        return Err(Error::AlreadyExists {
            msg: "Username already exists".to_string(),
        });
    }

    // Check if the identity_id exists
    let identity_exists =
        IDENTITY_STORAGE.with(|service| service.borrow().contains_key(&identity_id));

    if !identity_exists {
        return Err(Error::NotFound {
            msg: "Identity ID does not exist".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let patient = Patient {
        id,
        username,
        identity_id,
    };

    PATIENT_STORAGE.with(|service| service.borrow_mut().insert(id, patient.clone()));
    Ok(patient)
}

#[ic_cdk::query]
fn get_appointment(appointment_id: u64) -> Result<Appointment, Error> {
    match _get_appointment(&appointment_id) {
        Some(appointment) => Ok(appointment),
        None => Err(Error::NotFound {
            msg: format!("appointment with id={} not found", appointment_id),
        }),
    }
}

#[ic_cdk::update]
fn add_appointment(
    patient_id: u64,
    doctor_id: u64,
    appointment_date: u64,
    time: String,
    status: String,
) -> Result<Appointment, Error> {
    // Validate input data
    if status.is_empty() {
        return Err(Error::InvalidInput {
            msg: "status cannot be empty".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let appointment = Appointment {
        id,
        patient_id,
        doctor_id,
        appointment_date,
        time,
        status,
    };

    APPOINTMENT_STORAGE.with(|service| service.borrow_mut().insert(id, appointment.clone()));
    Ok(appointment)
}

#[ic_cdk::query]
fn get_message(message_id: u64) -> Result<Message, Error> {
    match _get_message(&message_id) {
        Some(message) => Ok(message),
        None => Err(Error::NotFound {
            msg: format!("message with id={} not found", message_id),
        }),
    }
}

#[ic_cdk::update]
fn send_message(
    sender_id: u64,
    receiver_id: u64,
    content: String,
    multimedia_content: Option<MultiMediaContent>,
) -> Result<Message, Error> {
    // Validate input data
    if content.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Message content cannot be empty".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let message = Message {
        id,
        sender_id,
        receiver_id,
        content,
        multimedia_content,
    };

    MESSAGE_STORAGE.with(|service| service.borrow_mut().insert(id, message.clone()));
    Ok(message)
}

#[ic_cdk::query]
fn get_medical_record(record_id: u64) -> Result<MedicalRecord, Error> {
    match _get_medical_record(&record_id) {
        Some(record) => Ok(record),
        None => Err(Error::NotFound {
            msg: format!("medical record with id={} not found", record_id),
        }),
    }
}

#[ic_cdk::query]
fn list_appointments() -> Vec<Appointment> {
    APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, appointment)| appointment.clone())
            .collect()
    })
}

// Similar implementation for messages and medical records

#[ic_cdk::update]
fn update_message(
    message_id: u64,
    sender_id: u64,
    receiver_id: u64,
    content: String,
    multimedia_content: Option<MultiMediaContent>,
) -> Result<Message, Error> {
    // Validate input data
    if content.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Message content cannot be empty".to_string(),
        });
    }

    let updated_message = Message {
        id: message_id,
        sender_id,
        receiver_id,
        content,
        multimedia_content,
    };

    // Update message in storage
    match MESSAGE_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(message_id, updated_message.clone())
    }) {
        Some(_) => Ok(updated_message),
        None => Err(Error::NotFound {
            msg: format!("Message with id={} not found", message_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_message(message_id: u64) -> Result<(), Error> {
    // Remove message from storage
    match MESSAGE_STORAGE.with(|service| service.borrow_mut().remove(&message_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Message with id={} not found", message_id),
        }),
    }
}

#[ic_cdk::query]
fn list_messages() -> Vec<Message> {
    MESSAGE_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, message)| message.clone())
            .collect()
    })
}

#[ic_cdk::update]
fn create_medical_record(
    record_id: u64,
    patient_id: u64,
    lab_results: String,
    treatment_history: String,
) -> Result<MedicalRecord, Error> {
    // Input validation
    if lab_results.trim().is_empty() || treatment_history.trim().is_empty() {
        return Err(Error::InvalidInput {
            msg: "Lab results and treatment history cannot be empty".to_string(),
        });
    }

    let new_record = MedicalRecord {
        id: record_id,
        patient_id,
        lab_results,
        treatment_history,
    };

    // Insert the new medical record into storage
    match MEDICAL_RECORD_STORAGE
        .with(|service| service.borrow_mut().insert(record_id, new_record.clone()))
    {
        Some(_) => Err(Error::AlreadyExists {
            msg: format!("Medical record with id={} already exists", record_id),
        }),
        None => Ok(new_record),
    }
}

#[ic_cdk::update]
fn update_medical_record(
    record_id: u64,
    patient_id: u64,
    lab_results: String,
    treatment_history: String,
) -> Result<MedicalRecord, Error> {
    // Input validation
    if lab_results.trim().is_empty() || treatment_history.trim().is_empty() {
        return Err(Error::InvalidInput {
            msg: "Lab results and treatment history cannot be empty".to_string(),
        });
    }

    let updated_record = MedicalRecord {
        id: record_id,
        patient_id,
        lab_results,
        treatment_history,
    };

    // Update medical record in storage
    match MEDICAL_RECORD_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(record_id, updated_record.clone())
    }) {
        Some(_) => Ok(updated_record),
        None => Err(Error::NotFound {
            msg: format!("Medical record with id={} not found", record_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_medical_record(record_id: u64) -> Result<(), Error> {
    // Input validation
    if record_id == 0 {
        return Err(Error::InvalidInput {
            msg: "Record ID cannot be zero".to_string(),
        });
    }

    // Remove medical record from storage
    match MEDICAL_RECORD_STORAGE.with(|service| service.borrow_mut().remove(&record_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Medical record with id={} not found", record_id),
        }),
    }
}

#[ic_cdk::query]
fn list_medical_records() -> Vec<MedicalRecord> {
    MEDICAL_RECORD_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, record)| record.clone())
            .collect()
    })
}

#[ic_cdk::update]
fn add_doctor(
    principal_str: String,
    fname: String,
    lname: String,
    dob: String,
    specialism: String,
    licence_no: u64,
    id_no: u64,
    sex: String,
    country: String,
    city: String,
) -> Result<Doctor, Error> {
    // Validate input data
    if principal_str.is_empty()
        || fname.is_empty()
        || lname.is_empty()
        || dob.is_empty()
        || specialism.is_empty()
        || sex.is_empty()
        || country.is_empty()
        || city.is_empty()
    {
        return Err(Error::InvalidInput {
            msg: "All fields must be filled".to_string(),
        });
    }

    // Check if the principal already exists
    let exists = DOCTOR_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, doctor)| doctor.principal_str == principal_str)
    });

    if exists {
        return Err(Error::AlreadyExists {
            msg: "Principal already exists".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let doctor = Doctor {
        id,
        principal_str,
        fname,
        lname,
        dob,
        specialism,
        licence_no,
        id_no,
        sex,
        country,
        city,
    };

    DOCTOR_STORAGE.with(|service| service.borrow_mut().insert(id, doctor.clone()));
    Ok(doctor)
}

#[ic_cdk::update]
fn update_doctor(
    principal_str: String,
    fname: String,
    lname: String,
    dob: String,
    specialism: String,
    licence_no: u64,
    id_no: u64,
    sex: String,
    country: String,
    city: String,
) -> Result<Doctor, Error> {
    // Validate input data
    if fname.is_empty()
        || lname.is_empty()
        || dob.is_empty()
        || specialism.is_empty()
        || sex.is_empty()
        || country.is_empty()
        || city.is_empty()
    {
        return Err(Error::InvalidInput {
            msg: "All fields must be provided".to_string(),
        });
    }

    // Convert the principal_str to a u64 or appropriate key type used in storage
    let identity_id = principal_str
        .parse::<u64>()
        .map_err(|_| Error::InvalidInput {
            msg: "Invalid Identity ID format".to_string(),
        })?;

    // Check if the doctor with the identity ID exists in DOCTOR_STORAGE
    let doctor_exists = DOCTOR_STORAGE.with(|service| service.borrow().contains_key(&identity_id));

    if !doctor_exists {
        return Err(Error::NotFound {
            msg: "Doctor with this Identity ID does not exist".to_string(),
        });
    }

    // Create the updated doctor object
    let updated_doctor = Doctor {
        id: identity_id,
        principal_str: identity_id.to_string(),
        fname,
        lname,
        dob,
        specialism,
        licence_no,
        id_no,
        sex,
        country,
        city,
    };

    // Update the doctor in the DOCTOR_STORAGE
    DOCTOR_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(identity_id, updated_doctor.clone())
    });

    Ok(updated_doctor)
}

#[ic_cdk::query]
fn get_doctor(docidentity_id: u64) -> Result<Doctor, Error> {
    match _get_doctor(&docidentity_id) {
        Some(doctor) => Ok(doctor),
        None => Err(Error::NotFound {
            msg: format!("Doctor with docidentity_id={} not found", docidentity_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_doctor(doctor_id: u64) -> Result<(), Error> {
    // Remove doctor from storage
    match DOCTOR_STORAGE.with(|service| service.borrow_mut().remove(&doctor_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Doctor with id={} not found", doctor_id),
        }),
    }
}

#[ic_cdk::query]
fn list_doctors() -> Vec<Doctor> {
    DOCTOR_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, doctor)| doctor.clone())
            .collect()
    })
}

#[ic_cdk::update]
fn add_report(
    patient_id: u64,
    username: String,
    symptoms: String,
    diagnostic: String,
    prescription: String,
    recommendations: String,
    multimedia_content: Option<MultiMediaContent>,
) -> Result<Report, Error> {
    // Validate input data
    if username.is_empty()
        || symptoms.is_empty()
        || diagnostic.is_empty()
        || prescription.is_empty()
        || recommendations.is_empty()
    {
        return Err(Error::InvalidInput {
            msg: "All fields must be provided".to_string(),
        });
    }

    // Check if the patient exists
    if _get_patient(&patient_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Patient with id={} not found", patient_id),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let report = Report {
        id,
        patient_id,
        username,
        symptoms,
        diagnostic,
        prescription,
        recommendations,
        multimedia_content,
    };

    REPORT_STORAGE.with(|service| service.borrow_mut().insert(id, report.clone()));
    Ok(report)
}

#[ic_cdk::query]
fn get_report(report_id: u64) -> Result<Report, Error> {
    match _get_report(&report_id) {
        Some(report) => Ok(report),
        None => Err(Error::NotFound {
            msg: format!("Report with id={} not found", report_id),
        }),
    }
}

#[ic_cdk::update]
fn update_report(
    report_id: u64,
    patient_id: u64,
    username: String,
    symptoms: String,
    diagnostic: String,
    prescription: String,
    recommendations: String,
    multimedia_content: Option<MultiMediaContent>,
) -> Result<Report, Error> {
    // Validate input data
    if username.is_empty()
        || symptoms.is_empty()
        || diagnostic.is_empty()
        || prescription.is_empty()
        || recommendations.is_empty()
    {
        return Err(Error::InvalidInput {
            msg: "All fields must be provided".to_string(),
        });
    }

    let updated_report = Report {
        id: report_id,
        patient_id,
        username,
        symptoms,
        diagnostic,
        prescription,
        recommendations,
        multimedia_content,
    };

    // Update report in storage
    match REPORT_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(report_id, updated_report.clone())
    }) {
        Some(_) => Ok(updated_report),
        None => Err(Error::NotFound {
            msg: format!("Report with id={} not found", report_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_report(report_id: u64) -> Result<(), Error> {
    // Remove report from storage
    match REPORT_STORAGE.with(|service| service.borrow_mut().remove(&report_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Report with id={} not found", report_id),
        }),
    }
}

#[ic_cdk::query]
fn list_reports() -> Vec<Report> {
    REPORT_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, report)| report.clone())
            .collect()
    })
}

#[ic_cdk::update]
fn add_availability(
    doctor_id: u64,
    day_of_week: u8,
    start_time: String,
    end_time: String,
    is_available: bool,
) -> Result<Availability, Error> {
    // Validate input data
    if day_of_week > 6 {
        return Err(Error::InvalidInput {
            msg: "Invalid day of the week".to_string(),
        });
    }
    if start_time.is_empty() || end_time.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Start time or end time cannot be empty".to_string(),
        });
    }

    // Check if the doctor exists
    if _get_doctor(&doctor_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Doctor with id={} not found", doctor_id),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let availability = Availability {
        id,
        doctor_id,
        day_of_week,
        start_time,
        end_time,
        is_available,
    };

    AVAILABILITY_STORAGE.with(|service| service.borrow_mut().insert(id, availability.clone()));
    Ok(availability)
}

#[ic_cdk::query]
fn get_availability(availability_id: u64) -> Result<Availability, Error> {
    match _get_availability(&availability_id) {
        Some(availability) => Ok(availability),
        None => Err(Error::NotFound {
            msg: format!("Availability with id={} not found", availability_id),
        }),
    }
}

#[ic_cdk::update]
fn update_availability(
    availability_id: u64,
    doctor_id: u64,
    day_of_week: u8,
    start_time: String,
    end_time: String,
    is_available: bool,
) -> Result<Availability, Error> {
    // Validate input data
    if day_of_week > 6 {
        return Err(Error::InvalidInput {
            msg: "Invalid day of the week".to_string(),
        });
    }
    if start_time.is_empty() || end_time.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Start time or end time cannot be empty".to_string(),
        });
    }

    let updated_availability = Availability {
        id: availability_id,
        doctor_id,
        day_of_week,
        start_time,
        end_time,
        is_available,
    };

    // Update availability in storage
    match AVAILABILITY_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(availability_id, updated_availability.clone())
    }) {
        Some(_) => Ok(updated_availability),
        None => Err(Error::NotFound {
            msg: format!("Availability with id={} not found", availability_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_availability(availability_id: u64) -> Result<(), Error> {
    // Remove availability from storage
    match AVAILABILITY_STORAGE.with(|service| service.borrow_mut().remove(&availability_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Availability with id={} not found", availability_id),
        }),
    }
}

#[ic_cdk::query]
fn list_availabilities() -> Vec<Availability> {
    AVAILABILITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .map(|(_, availability)| availability.clone())
            .collect()
    })
}

#[ic_cdk::query]
fn filter_availability_by_doctor_id(doctor_id: u64) -> Vec<Availability> {
    AVAILABILITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .filter(|(_, availability)| availability.doctor_id == doctor_id)
            .map(|(_, availability)| availability.clone())
            .collect()
    })
}

fn _get_patient(patient_id: &u64) -> Option<Patient> {
    PATIENT_STORAGE.with(|service| service.borrow().get(patient_id))
}

fn _get_appointment(appointment_id: &u64) -> Option<Appointment> {
    APPOINTMENT_STORAGE.with(|service| service.borrow().get(appointment_id))
}

fn _get_message(message_id: &u64) -> Option<Message> {
    MESSAGE_STORAGE.with(|service| service.borrow().get(message_id))
}

fn _get_medical_record(record_id: &u64) -> Option<MedicalRecord> {
    MEDICAL_RECORD_STORAGE.with(|service| service.borrow().get(record_id))
}

fn _get_doctor(docidentity_id: &u64) -> Option<Doctor> {
    DOCTOR_STORAGE.with(|service| service.borrow().get(docidentity_id))
}

fn _get_report(report_id: &u64) -> Option<Report> {
    REPORT_STORAGE.with(|service| service.borrow().get(report_id))
}

fn _get_identity(identity_id: &u64) -> Option<Identity> {
    IDENTITY_STORAGE.with(|service| service.borrow().get(identity_id))
}

fn _get_docidentity(docidentity_id: &u64) -> Option<DocIdentity> {
    DOCIDENTITY_STORAGE.with(|service| service.borrow().get(docidentity_id))
}

fn _get_availability(availability_id: &u64) -> Option<Availability> {
    AVAILABILITY_STORAGE.with(|service| service.borrow().get(availability_id))
}

#[ic_cdk::update]
fn send_reminder_to_patient(
    patient_id: u64,
    content: String,
    multimedia_content: Option<MultiMediaContent>,
) -> Result<Message, Error> {
    // Validate input data
    if content.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Reminder content cannot be empty".to_string(),
        });
    }

    // Check if the patient exists
    if _get_patient(&patient_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Patient with id={} not found", patient_id),
        });
    }

    // Get the sender ID (could be a system ID or a doctor ID)
    let sender_id = 0; // You can change this based on your system design

    // Construct the message
    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let message = Message {
        id,
        sender_id,
        receiver_id: patient_id,
        content,
        multimedia_content,
    };

    // Store the message
    MESSAGE_STORAGE.with(|service| service.borrow_mut().insert(id, message.clone()));

    Ok(message)
}

//New functions for data and calendly
#[ic_cdk::update]
fn add_calendly(principle_id: String, calendly: String) -> Result<Calendly, Error> {
    // Validate input data

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let calendly = Calendly {
        id,
        principle_id,
        calendly,
    };

    CALENDLY_STORAGE.with(|service| service.borrow_mut().insert(id, calendly.clone()));
    Ok(calendly)
}

#[ic_cdk::update]
fn add_data(
    patient_username: String,
    doctor_username: String,
    data: Vec<u8>,
) -> Result<Data, Error> {
    // Validate input data

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let data = Data {
        id,
        patient_username,
        doctor_username,
        data,
    };

    DATA_STORAGE.with(|service| service.borrow_mut().insert(id, data.clone()));
    Ok(data)
}

#[ic_cdk::query]
fn get_calendly(id: u64) -> Result<Calendly, Error> {
    CALENDLY_STORAGE.with(|service| {
        service
            .borrow()
            .get(&id)
            .map(|calendly| calendly.clone())
            .ok_or(Error::NotFound {
                msg: format!("Calendly with id={} not found", id),
            })
    })
}
#[ic_cdk::query]
fn get_data(id: u64) -> Result<Data, Error> {
    DATA_STORAGE.with(|service| {
        service
            .borrow()
            .get(&id)
            .map(|data| data.clone())
            .ok_or(Error::NotFound {
                msg: format!("Calendly with id={} not found", id),
            })
    })
}

#[ic_cdk::update]
fn delete_calendly(id: u64) -> Result<(), Error> {
    CALENDLY_STORAGE.with(|service| {
        let mut storage = service.borrow_mut();
        if storage.remove(&id).is_some() {
            Ok(())
        } else {
            Err(Error::NotFound {
                msg: format!("Calendly with id={} not found", id),
            })
        }
    })
}

// Export Candid interface
ic_cdk::export_candid!();
