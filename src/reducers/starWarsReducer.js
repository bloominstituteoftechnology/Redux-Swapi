import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../actions';

const initialState = {
  characters: [], isFetching: false, error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [
          ...state.characters,
          ...action.payload ]
        }
    case FETCHING_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
