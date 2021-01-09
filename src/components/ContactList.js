import React, { useEffect } from 'react';
import { Contact } from './Contact';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { filterContacts, getContactsByKeyword } from '../redux/selectors';
import { loadContacts } from './../redux/actions/contact';

export const ContactList = ({ contacts, loadContacts }) => {
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const contactsRows = contacts.map((contact) => (
    <Contact key={contact.id} contact={contact} />
  ));

  return (
    <div style={{ height: '550px', overflowY: 'auto' }}>
      <h3 className="mt-3">Your Contacts</h3>

      {contacts && contacts.length ? (
        contactsRows
      ) : (
        <div className="font-weight-bold"> No contacts! </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  // const { searchFilter } = state;
  return {
    contacts: getContactsByKeyword(state),
  };
}

export default connect(mapStateToProps, { loadContacts })(ContactList);
