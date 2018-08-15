import { FETCHING_DATA, FETCHED_DATA } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA: 
      console.log('^^^^^^^^^^^^^^FETCHING DATA^^^^^^^^^^^^^^^^')
    case FETCHED_DATA:
      console.log('##############FETCHED DATA#################')
    default:
      return state;
  }
};
