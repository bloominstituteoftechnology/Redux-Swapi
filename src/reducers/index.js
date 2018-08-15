import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

 const rootReducer = combineReducers({
  chars: charsReducer
});

export default rootReducer;
