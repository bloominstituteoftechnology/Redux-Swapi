/*
import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  charsReducer
});
*/

//ADDED CODE

import { FETCHED_DOGS } from "../actions/dogsActions";

const initialState = {
  name: "Dan Frehner",
  username: "",
  email: "",
  lastLoggedIn: ""
};

export default (previousState = initialState, action) => {
  switch (action.type) {
    case FETCHED_DOGS:
      return previousState;
    default:
      return previousState;
  }
};
