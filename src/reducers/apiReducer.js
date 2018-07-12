import { FETCHING, ERROR, FETCHED } from '../actions/index'

const initialState = { fetching: true, error: false, fetched: false }

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.payload }
    case FETCHED:
      return { ...state, fetched: true, fetching: false }
    case ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
