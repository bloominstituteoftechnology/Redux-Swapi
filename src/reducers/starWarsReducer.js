import { FETCHING_PEOPLE, FETCHED_PEOPLE, ERROR_PEOPLE } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetchingPeople: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_PEOPLE:
      console.log(state)
      return {...state, fetchingPeople: true};

    case FETCHED_PEOPLE:
      return {...state, chars: action.payload, fetchingPeople: false };

    case ERROR_PEOPLE:
      return {...state, fetchingPeople: false, error: 'Error retreiving characters.'}

    default:
      return state;
  }
};
