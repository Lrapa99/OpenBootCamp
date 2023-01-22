import React, { useRef } from "react";
import { Contact } from "./models/contact.class";

const CreateContact = ({ createContact }) => {
  const nameRef = useRef("");
  const lastnameRef = useRef("");
  const emailRef = useRef("");

  function createContacts(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value,
      false
    );
    createContact(newContact);
  }

  return (
    <div>
      <h2>Create contact</h2>
      <form
        onSubmit={createContacts}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="contact name"
          autoFocus
          required
        />
        <input
          ref={lastnameRef}
          type="text"
          placeholder="contact lastname"
          required
        />
        <input
          ref={emailRef}
          type="text"
          placeholder="contact email"
          required
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          Create contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
