import React from 'react';
import { Contact } from './Contact';
import { connect } from 'react-redux';
import { filterContacts } from '../redux/selectors';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <h3 className="mt-3">Your Contacts</h3>
      {contacts && contacts.length ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <div className="font-weight-bold"> No contacts! </div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  const { searchFilter } = state;
  return {
    contacts: filterContacts(state, searchFilter),
  };
}

export default connect(mapStateToProps)(ContactList);
