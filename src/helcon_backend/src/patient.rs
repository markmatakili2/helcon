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
#[ic_cdk::update]
fn delete_identity(identity_id: u64) -> Result<(), Error> {
    // Remove report from storage
    match IDENTITY_STORAGE.with(|service| service.borrow_mut().remove(&identity_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Report with id={} not found", identity_id),
        }),
    }
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

#[ic_cdk::update]
fn delete_patient(patient_id: u64) -> Result<(), Error> {
    // Remove patient from storage
    match PATIENT_STORAGE.with(|service| service.borrow_mut().remove(&patient_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Patient with id={} not found", patient_id),
        }),
    }
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
    phone_no: String,
    slot: String,
    reason: String,
    symtoms: String,
    status: String,
    appointment_type: String,
) -> Result<Appointment, Error> {
    // Validate input data
    if phone_no.is_empty() {
        return Err(Error::InvalidInput {
            msg: "phone_no cannot be empty".to_string(),
        });
    }

    // Check if the doctor and patient exist
    if _get_doctor(&doctor_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Doctor with id={} not found", doctor_id),
        });
    }
    if _get_patient(&patient_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Patient with id={} not found", patient_id),
        });
    }

    // Find the available slot for the doctor
    let available_slot = AVAILABILITY_STORAGE.with(|service| {
        service.borrow().iter().find(|(_, availability)| {
            availability.doctor_id == doctor_id
                && availability.is_available
                && availability.start_time == slot
        })
    });

    if available_slot.is_none() {
        return Err(Error::InvalidInput {
            msg: "Selected slot is not available".to_string(),
        });
    }

    // Mark the slot as unavailable
    let mut availability = available_slot.unwrap().1.clone();
    availability.is_available = false;
    AVAILABILITY_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(availability.id, availability.clone())
    });

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
        phone_no,
        slot,
        reason,
        symtoms,
        status: "pending".to_string(),
        appointment_type,
    };

    APPOINTMENT_STORAGE.with(|service| service.borrow_mut().insert(id, appointment.clone()));
    Ok(appointment)
}

#[ic_cdk::update]
fn update_appointment(
    appointment_id: u64,
    patient_id: u64,
    doctor_id: u64,
    phone_no: String,
    slot: String,
    reason: String,
    symtoms: String,
    status: String,
    appointment_type: String,
) -> Result<Appointment, Error> {
    // Validate input data
    if phone_no.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Phone number cannot be empty".to_string(),
        });
    }

    // Check if the appointment exists
    if _get_appointment(&appointment_id).is_none() {
        return Err(Error::NotFound {
            msg: format!("Appointment with id={} not found", appointment_id),
        });
    }

    // If the appointment is canceled or completed, mark the slot as available
    if status == "cancelled" || status == "confirmed" {
        // Find the availability for the doctor and slot
        if let Some(mut availability) = AVAILABILITY_STORAGE.with(|service| {
            service
                .borrow()
                .iter()
                .find(|(_, availability)| {
                    availability.doctor_id == doctor_id && availability.start_time == slot
                })
                .map(|(_, availability)| availability.clone())
        }) {
            availability.is_available = true; // Mark the slot as available
            AVAILABILITY_STORAGE.with(|service| {
                service
                    .borrow_mut()
                    .insert(availability.id, availability.clone())
            });
        }
    }

    let updated_appointment = Appointment {
        id: appointment_id,
        patient_id,
        doctor_id,
        phone_no,
        slot,
        reason,
        symtoms,
        status,
        appointment_type,
    };

    // Update the appointment in storage
    match APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(appointment_id, updated_appointment.clone())
    }) {
        Some(_) => Ok(updated_appointment),
        None => Err(Error::NotFound {
            msg: format!("Appointment with id={} not found", appointment_id),
        }),
    }
}

#[ic_cdk::query]
fn filter_available_slots_by_doctor_id(doctor_id: u64) -> Vec<Availability> {
    AVAILABILITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .filter(|(_, availability)| {
                availability.doctor_id == doctor_id && availability.is_available
            })
            .map(|(_, availability)| availability.clone())
            .collect()
    })
}

#[ic_cdk::update]
fn cancel_appointment(appointment_id: u64) -> Result<Appointment, Error> {
    // Fetch the current appointment
    let current_appointment = _get_appointment(&appointment_id).ok_or(Error::NotFound {
        msg: format!("Appointment with id={} not found", appointment_id),
    })?;

    // Update the appointment status to 'cancelled'
    let mut updated_appointment = current_appointment.clone();
    updated_appointment.status = "cancelled".to_string();

    // Find the corresponding availability slot
    let availability_slot = AVAILABILITY_STORAGE.with(|service| {
        service.borrow().iter().find(|(_, availability)| {
            availability.doctor_id == current_appointment.doctor_id
                && availability.start_time == current_appointment.slot
        })
    });

    if let Some((_, mut availability)) = availability_slot {
        // Mark the availability as available
        availability.is_available = true;
        AVAILABILITY_STORAGE.with(|service| {
            service
                .borrow_mut()
                .insert(availability.id, availability.clone())
        });
    }

    // Update the appointment in storage
    APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(appointment_id, updated_appointment.clone())
    });

    Ok(updated_appointment)
}

#[ic_cdk::update]
fn complete_appointment(appointment_id: u64) -> Result<Appointment, Error> {
    // Fetch the current appointment
    let current_appointment = _get_appointment(&appointment_id).ok_or(Error::NotFound {
        msg: format!("Appointment with id={} not found", appointment_id),
    })?;

    // Update the appointment status to 'confirmed'
    let mut updated_appointment = current_appointment.clone();
    updated_appointment.status = "confirmed".to_string();

    // Find the corresponding availability slot
    let availability_slot = AVAILABILITY_STORAGE.with(|service| {
        service.borrow().iter().find(|(_, availability)| {
            availability.doctor_id == current_appointment.doctor_id
                && availability.start_time == current_appointment.slot
        })
    });

    if let Some((_, mut availability)) = availability_slot {
        // Mark the availability as available (if necessary)
        availability.is_available = true; // Typically, you may not want to change this for confirmed appointments
        AVAILABILITY_STORAGE.with(|service| {
            service
                .borrow_mut()
                .insert(availability.id, availability.clone())
        });
    }

    // Update the appointment in storage
    APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow_mut()
            .insert(appointment_id, updated_appointment.clone())
    });

    Ok(updated_appointment)
}

#[ic_cdk::query]
fn filter_appointments_by_doctor_id(doctor_id: u64) -> Vec<Appointment> {
    APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .filter(|(_, appointment)| appointment.doctor_id == doctor_id)
            .map(|(_, appointment)| appointment.clone())
            .collect()
    })
}

#[ic_cdk::query]
fn filter_appointments_by_patient_id(patient_id: u64) -> Vec<Appointment> {
    APPOINTMENT_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .filter(|(_, appointment)| appointment.patient_id == patient_id)
            .map(|(_, appointment)| appointment.clone())
            .collect()
    })
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

#[ic_cdk::update]
fn delete_appointment(appointment_id: u64) -> Result<(), Error> {
    // Remove appointment from storage
    match APPOINTMENT_STORAGE.with(|service| service.borrow_mut().remove(&appointment_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Appointment with id={} not found", appointment_id),
        }),
    }
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
