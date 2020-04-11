import { createSelector } from 'reselect';

export const getContacts = (store) =>
  store.contacts ? store.contacts.allContacts : [];

const getKeyword = (store) => {
  return store.contacts ? store.contacts.searchFilter : ''
};

export const filterContacts = (store, filter) => {
  const allContacts = getContacts(store);
  return allContacts.filter((c) => c.name.toLowerCase().includes(filter));
};

export const getContactsByKeyword = createSelector(
  [getContacts, getKeyword],
  (allContacts, filter) => {
    return allContacts.filter((c) => c.name.toLowerCase().includes(filter));
  }
);
