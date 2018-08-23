import { FETCHING_DATA, DATA_FETCH_SUCCESS, DATA_FETCH_ERROR } from '../actions';
import { Object } from "core-js";

const initialState = {4
  data: [], fetchingData: false, error: ""
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingData: true });
    case DATA_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.payload],
        fetchingData: false
      });
    case DATA_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingData: false,
        error: "Error fetching data"
      });
    default:
      return state;
  }
};
