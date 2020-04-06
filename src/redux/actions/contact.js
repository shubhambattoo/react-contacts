let nextContactId = 0;

export const addContact = (content) => ({
  type: 'ADD_CONTACT',
  payload: { id: ++nextContactId, ...content },
});
