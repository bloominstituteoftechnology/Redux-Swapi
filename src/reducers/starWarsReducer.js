import {FETCHING, SUCCESS, FAILURE} from '../actions/index';

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {error: '', fetching: true});

    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.characters,
        fetching: false,
        error: ''
      });

    case FAILURE:
      return Object.assign({}, state, {error: action.error, fetching: false});

    default:
      return state;
  }
};
