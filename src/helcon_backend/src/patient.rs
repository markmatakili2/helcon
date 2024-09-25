#[ic_cdk::query]
fn get_patient(patient_id: u64) -> Result<Patient, Error> {
    match _get_patient(&patient_id) {
        Some(patient) => Ok(patient),
        None => Err(Error::NotFound {
            msg: format!("patient with id={} not found", patient_id),
        }),
    }
}
