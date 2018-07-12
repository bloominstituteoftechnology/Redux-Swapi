import { FETCHED } from '../actions/index'

const initialState = {
  chars: []
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return [ ...state, ...action.payload ]
    default:
      return state
  }
}
