import { combineReducers } from 'redux';
import { charsReducer as chars } from './starWarsReducer';

export default combineReducers({
  chars,
});
