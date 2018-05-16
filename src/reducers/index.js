import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export const starWarsReducer = combineReducers({
  charsReducer
});
