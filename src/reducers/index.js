import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

const rootReducer = combineReducers({
  charsReducer: charsReducer,

});
 export default rootReducer;