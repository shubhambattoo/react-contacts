import React from 'react';
import { Contact } from './Contact';
import { connect } from 'react-redux';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <h3 className="mt-3">Your Contacts</h3>
      {contacts && contacts.length ? (
        contacts.map((contact) => (
          <Contact key={connect.id} contact={contact} />
        ))
      ) : (
        <div className="font-weight-bold"> No contacts added yet! </div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts.allContacts,
  };
}

export default connect(mapStateToProps)(ContactList);
