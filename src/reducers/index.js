import { combineReducers } from 'redux'
import { charsReducer } from './starWarsReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  chars: charsReducer,
  api: apiReducer
})
export default rootReducer
