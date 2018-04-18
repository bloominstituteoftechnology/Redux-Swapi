import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_ERROR
} from '../actions'

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
}

export const charsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STARTED:
      return Object.assign({}, state, { fetching: true, fetched: false, error: null })  
    case FETCH_SUCCESS:      
      return Object.assign({}, state, { chars: payload, fetching: false, fetched: true, error: null })
    case FETCH_ERROR:
      return Object.assign({}, state, { fetching: false, fetched: false, error: payload })  
    default:
      return state
  }
}
