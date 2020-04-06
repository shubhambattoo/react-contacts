export const getContacts = (store) =>
  store.contacts ? store.contacts.allContacts : [];

export const filterContacts = (store, filter) => {
  const allContacts = getContacts(store);
  return allContacts.filter((c) => c.name.toLowerCase().includes(filter));
};
