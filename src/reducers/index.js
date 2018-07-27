import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  chars: charsReducer
});


//we're building our state as an object made from reducers