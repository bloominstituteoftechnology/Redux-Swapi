import {  FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR   } from '../actions';
const initialState = {

  swapi:[],
  fetchingData: false,
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
    return Object.assign({},state,{fetchingData: true});
    case FETCHING_DATA_SUCCESS:
    return Object.assign({}, state, {
        swapi: [...state.swapi, ...action.payload],
        fetchingData: false
      });
      case FETCHING_DATA_ERROR:
      return Object.assign({},state, {
        fetchingData: false,
        error: "api error"
      })
    default:
      return state;
  }
};
