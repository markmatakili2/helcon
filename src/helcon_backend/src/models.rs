use candid::{Decode, Encode};
use ic_stable_structures::{BoundedStorable, Storable};
use std::borrow::Cow;

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct MultiMediaContent {
    image_url: Option<String>,
    video_url: Option<String>,
    audio_url: Option<String>,
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Calendly {
    pub id: u64,
    pub principle_id: String,
    pub calendly: String,
}

impl Storable for Calendly {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Calendly {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Data {
    pub id: u64,
    pub patient_username: String,
    pub doctor_username: String,
    pub data: Vec<u8>,
}

impl Storable for Data {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Data {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Patient {
    pub id: u64,
    pub username: String,
    pub identity_id: u64,
}

impl Storable for Patient {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Patient {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Appointment {
    pub id: u64,
    pub patient_id: u64,
    pub doctor_id: u64,
    pub phone_no: String,
    pub slot: String,
    pub reason: String,
    pub symtoms: String,
    pub status: String,
    pub appointment_type: String,
}

impl Storable for Appointment {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Appointment {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Availability {
    pub id: u64,
    pub doctor_id: u64,
    pub day_of_week: u8,
    pub start_time: String,
    pub end_time: String,
    pub is_available: bool,
}

impl Storable for Availability {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Availability {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Message {
    pub id: u64,
    pub sender_id: u64,
    pub receiver_id: u64,
    pub content: String,
    pub multimedia_content: Option<MultiMediaContent>,
}

impl Storable for Message {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Message {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct MedicalRecord {
    pub id: u64,
    pub patient_id: u64,
    pub lab_results: String,
    pub treatment_history: String,
}

impl Storable for MedicalRecord {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for MedicalRecord {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Doctor {
    pub id: u64,
    pub principal_str: String,
    pub fname: String,
    pub lname: String,
    pub dob: String,
    pub specialism: String,
    pub licence_no: u64,
    pub id_no: u64,
    pub sex: String,
    pub country: String,
    pub city: String,
}

impl Storable for Doctor {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Doctor {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Report {
    pub id: u64,
    pub patient_id: u64,
    pub username: String,
    pub symptoms: String,
    pub diagnostic: String,
    pub prescription: String,
    pub recommendations: String,
    pub multimedia_content: Option<MultiMediaContent>,
}

impl Storable for Report {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Report {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct Identity {
    pub id: u64,
    pub principal: String,
}

impl Storable for Identity {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Identity {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
pub struct DocIdentity {
    pub id: u64,
    pub principal: String,
}

impl Storable for DocIdentity {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for DocIdentity {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}
