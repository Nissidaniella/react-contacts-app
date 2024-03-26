import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from './contactActions';

function ContactsForm({ addNewContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email
    };
    addNewContact(newContact);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewContact: (newContact) => dispatch(addContact(newContact))
  };
};

export default connect(null, mapDispatchToProps)(ContactsForm);