import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions/contact';

export const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleAddContact(e) {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    addContact(contact);
    setNumber('');
    setName('');
  }

  return (
    <form className="my-3" onSubmit={handleAddContact}>
      <div className="form-field mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field mb-3">
        <label htmlFor="number">Contact Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          className="form-control"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-field">
        <button type="submit" className="btn btn-info">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default connect(null, {addContact})(AddContact);
