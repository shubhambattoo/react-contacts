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
  // console.log(state);
  // const { searchFilter } = state;
  return {
    contacts: getContactsByKeyword(state),
  };
}

export default connect(mapStateToProps, { loadContacts })(ContactList);
