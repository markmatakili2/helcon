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
