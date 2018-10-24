import { FETCHING, FETCHED, ERROR } from '../actions'

const initialState = {
  chars: [],
  fetching: false,
  error: null
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true }
    case FETCHED:
      return { ...state, chars: action.chars, fetching: false }
    case ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
