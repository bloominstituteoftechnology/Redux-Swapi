import {FETCH_SUCCESS, FETCH_FAIL, FETCH_START} from "../actions";

const initialState = {
  characters: [],
  fetching: bool,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
    return {
      fetching: true,
      error: null,
    }
    case FETCH_SUCCESS:
    return {
      fetching: false,
      error: null,
      ...initialState,
      ...characters, characters: payload.data.characters
    }
    case FETCH_FAIL:
    return {
      fetching: false,
      error: payload.error
    }
    default:
      return state;
  }
};
