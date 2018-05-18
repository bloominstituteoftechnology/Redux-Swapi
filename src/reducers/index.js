import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({  //combineReducer is a redux function
  chars: charsReducer
});
