import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from '../actions/'

const initialState = {
  fetching: false,
  error: null,
  chars: [],
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
  case FETCHING_DATA:
    return Object.assign({}, state, { fetching: true })

  case DATA_FETCHED:
    console.log('in starWarsReducer:', action.payload)
    return Object.assign({}, state, {
      fetching: false,
      chars: state.chars.concat(action.payload)
    })

  case FETCH_ERROR:
    return Object.assign({}, state, { error: action.error })

  default:
    return state
  }
};
