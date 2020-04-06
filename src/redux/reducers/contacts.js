const initialState = {
  allContacts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        allContacts: [...state.allContacts, action.payload]
      }
    default:
      return state;
  }
}
