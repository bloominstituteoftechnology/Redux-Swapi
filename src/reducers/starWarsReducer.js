import { FETCHING_DATA, FETCHED_DATA } from '../actions';
const initialState = {
  chars: [],
  fetching: true,
  fetched: false
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA: 
      console.log('^^^^^^^^^^^^^^FETCHING DATA^^^^^^^^^^^^^^^^')
      return state
    case FETCHED_DATA:
      console.log('##############FETCHED DATA#################')
      return state
    default:
      return state;
  }
};
