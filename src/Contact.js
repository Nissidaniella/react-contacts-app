// import React, { Component } from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    contacts: [
      { name: 'John Doe', phoneNumber: '123-456-7890', location: 'New York' },
      { name: 'Jane Smith', phoneNumber: '987-654-3210', location: 'San Francisco' },
      { name: 'Tom Johnson', phoneNumber: '555-123-4567', location: 'Los Angeles' }
    ]
  };

  render() {
    return (
      <div>
        <Contacts contacts={this.state.contacts} />
        <ContactsForm handleAddContact={this.handleAddContact} />
      </div>
    );
  }

  handleAddContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  }
}

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name}, {contact.phoneNumber}, {contact.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

class ContactsForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
    location: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddContact(this.state);
    console.log('Form data:', this.state);
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </div>
          <div>
            <label>Location: </label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default App;