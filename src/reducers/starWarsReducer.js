import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null
};

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false,
        fetched: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching characters"
      });
    default:
      return state;
  }
};

export { starWarsReducer };
