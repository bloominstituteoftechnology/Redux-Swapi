import {FETCHING, FAILURE,SUCCESS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching:true}
    case SUCCESS:
      return {chars:action.payload, fetched:true, fetching: false}
    case FAILURE:
      return {...state, fetching: false, error: action.payload}

    default:
      return state;
  }
};
