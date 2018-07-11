import { combineReducers } from 'redux'
import { charsReducer } from './starWarsReducer'

const rootReducer = combineReducers({
  chars: charsReducer,
  fetching: false,
  fetched: false,
  error: null
})
export default rootReducer
