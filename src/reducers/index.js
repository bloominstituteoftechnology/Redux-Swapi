import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  charsReducer
});

//I guess this would be more exciting if I had more than one reducer. :)
