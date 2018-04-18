import {ERROR_FETCHING_CHARS, GET_CHARS, FETCHING_CHARS} from "../actions";

const initialState = {

    chars: [],
    fetching: false,
    fetched: true,
    error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
      case FETCHING_CHARS:
        return {...state, fetching:true};
      case GET_CHARS:
        return {...state,
            chars: action.payload,
            fetching: false,
            fetched: true};
      case ERROR_FETCHING_CHARS:
          return {...state,
              fetching:false,
              error:action.payload};
    default:
      return state;
  }
};
