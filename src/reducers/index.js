import { combineReducers } from 'redux';
import { charsReducer, isFetching } from './starWarsReducer';

export default combineReducers({
  charsReducer,
  isFetching
});
