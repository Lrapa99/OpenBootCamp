import React, { useState } from "react";
import CreateContact from "./createContact";
import { Contact } from "./models/contact.class";

const ShowContacts = () => {
  const contact1 = new Contact("maria", "perez", "mariaperez@gmail.com", false);
  const contact2 = new Contact("ray", "mcmillan", "mcmillan@gmail.com", false);
  const contact3 = new Contact("joe", "gil", "jgil@gmail.com", false);

  const [dataContact, setDataContact] = useState([
    contact1,
    contact2,
    contact3,
  ]);

  function createContact(newContact) {
    const tempContact = [...dataContact];
    tempContact.push(newContact);
    setDataContact(tempContact);
  }

  function deleteContact(contact) {
    const index = dataContact.indexOf(contact);
    const tempContact = [...dataContact];
    tempContact.splice(index, 1);
    setDataContact(tempContact);
  }

  function checked(contact) {
    const index = dataContact.indexOf(contact);
    const tempContact = [...dataContact];
    tempContact[index].conected = !tempContact[index].conected;
    // setDataContact para actualizar el estado
    setDataContact(tempContact);
  }

  return (
    <div>
      <h1>Your contacts</h1>
      {dataContact.map((contact, index) => {
        return (
          <div key={index} style={{ background: "#6c5ce7" }}>
            <p>
              Name:
              <span>{contact.name}</span>
            </p>
            <p>
              LastName:
              <span> {contact.lastname}</span>
            </p>
            <p>
              Email:
              <span>{contact.email}</span>
            </p>
            <p>
              State contact:
              <span
                style={
                  contact.conected
                    ? { fontWeight: "bold", color: "#00b894" }
                    : { fontWeight: "bold", color: "#d63031" }
                }
              >
                {contact.conected ? "Conected" : "Disconected"}{" "}
                <input type="checkbox" onClick={() => checked(contact)} />
              </span>
            </p>
            <button onClick={() => deleteContact(contact)}>
              deleteContact
            </button>
          </div>
        );
      })}
      <CreateContact createContact={createContact} />
    </div>
  );
};

export default ShowContacts;
