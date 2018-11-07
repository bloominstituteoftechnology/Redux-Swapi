import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

const rootReducer = combineReducers({
  charsReducer
});

export default rootReducer;