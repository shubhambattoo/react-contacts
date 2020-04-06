import { combineReducers } from 'redux';
import contacts from './contacts';
import searchFilter from './searchFilter';

export default combineReducers({ contacts, searchFilter });
