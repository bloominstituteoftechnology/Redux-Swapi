import { FETCHED, FETCHING, ERROR} from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  errorMessage: null,

}

export default (state = initialState, action) => {
  switch(action.typ) {
    case FETCHING:
      return { ...state, fetching: true }

    case ERROR:
      return { ...state, error: action.errorMessage }
    case FETCHED:
      return { ...state, chars: action.chars, fetching: false, error: null }
    default:
      return state;
  }
};