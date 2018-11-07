import {FETCHING, SUCCESS, FAILURE} from  "../actions/index";       // don't need index in path
const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

                              // state can be named previousState
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign( {}, state, {error: 'fetching: true'});


    case SUCCESS:
      return {...state,
        characters: [...state.characters, ...action.characters],
        fetching: false,
        error: ''
      };

    case FAILURE:
      return {}



   /*
    case SUCCESS:
      return Object.assign( {}, state, {
        characters: action.characters,
        fetching: false,
        error: ''




    case FAILURE:
      return {...state,
      fetching: false,
      error: action.error};
    */


    default:
      return state;
  }
};
