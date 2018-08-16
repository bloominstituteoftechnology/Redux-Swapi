import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

//use combine reducers to avoid conflicts with actions and runtime problems. 
//also use reducers to simplify the switch statement
export default combineReducers({
  starWars: charsReducer
});
