import {FETCHING, SUCCESS, FAILURE} from '../actions';

const initialState = {
  fetching: false,
  success: true,
  failure: false,
  characters: [],
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return {...state, fetching: true};
    }
    case SUCCESS: {
      return {
        ...state,
        fetching: false,
        success: true,
        characters: action.payload,
      };
    }
    case FAILURE: {
      return {...state, fetching: false, success: false, characters: []};
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
