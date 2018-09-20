import { FETCHING, FETCH_SUCCESS, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetchingStuff: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetchingStuff : true });

    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetchingStuff: false // tis already done!
      });

    case ERROR:
      return Object.assign({}, state, {
        fetchingStuff: false,
        eror: 'Lmao, couldn\'t find it. Sowwy'
      })

    default:
      return state;
  }
};
