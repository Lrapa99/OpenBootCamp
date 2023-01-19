import React from "react";
import ContactComponent from "./B";
import { Contact } from "./models/contact.class";

const MyContacts = () => {
  const defaultContact = new Contact(
    "defaultName",
    "defaultLastname",
    "defaultEmail@email.com",
    false
  );

  return (
    <div>
      <h1>Tus Contactos:</h1>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default MyContacts;
