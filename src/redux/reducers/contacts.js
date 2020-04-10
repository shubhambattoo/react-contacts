import {
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_FAIL,
} from '../actions/types';

const initialState = {
  allContacts: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        allContacts: [...state.allContacts, action.payload],
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        allContacts: [action.payload, ...state.allContacts],
        error: null,
      };
    case ADD_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CONTACT_SUCCESS:
      return {
        ...state,
        allContacts: action.payload,
        error: null,
      };
    case LOAD_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
