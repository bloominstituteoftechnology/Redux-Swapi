import {FETCHING, SUCCESS, FAILURE} from '../actions/index';


const initialState = {
  characters: [],
  fetching: false,
  error: ''
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {error: '', fetching: true});
     case SUCCESS:
      return Object.assign({}, state, {
        characters: action.characters,
        fetching: false,
        error: ''
      });
     case FAILURE:
      return Object.assign({}, state, {error: action.error, fetching: false});
    default:
      return state;
  }
};
