import { ADD_CONTACT_SUCCESS, ADD_CONTACT_FAIL, LOAD_CONTACT_SUCCESS, LOAD_CONTACT_FAIL } from './types';
import axios from 'axios';
import * as shortId from 'shortid';

export const addContact = (content) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3000/users', { id: shortId(), ...content })
      .then((res) => {
        dispatch(addContactSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addContactFail(err));
      });
  };
};

export const loadContacts = () => (dispatch) => {
  axios
    .get('http://localhost:3000/users')
    .then((res) => {
      dispatch(loadContactSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loadContactFail(err));
    });
};

const addContactSuccess = (contact) => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact,
});

const addContactFail = (error) => ({
  type: ADD_CONTACT_FAIL,
  payload: error,
});

const loadContactSuccess = (contacts) => ({
  type: LOAD_CONTACT_SUCCESS,
  payload: contacts,
});

const loadContactFail = (error) => ({
  type: LOAD_CONTACT_FAIL,
  payload: error,
});
