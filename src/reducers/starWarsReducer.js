import {ERROR_FETCHING_CHARS, GET_CHARS, FETCHING_CHARS} from "../actions";

const initialState = {

    chars: [],
    fetching: false,
    fetched: true,
    error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
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
