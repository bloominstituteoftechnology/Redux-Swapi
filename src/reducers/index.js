import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

const rootReducer = combineReducers({
  //Root reducer is now representation of entire state/store 
  //charsReducer is a section of state / a property within state 
  //state =  {charsReducer:  {characters: [], fetching: false, error: null}}
  charsReducer: charsReducer
});

export default rootReducer;