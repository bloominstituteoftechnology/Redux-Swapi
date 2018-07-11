import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export const rootReducer = combineReducers({
  charsReducer
});
