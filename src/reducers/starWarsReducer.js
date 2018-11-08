import {FETCHING, SUCCESS, FAILURE} from  "../actions/index";       // don't need index in path
const initialState = {
  characters: [],
  error: null,
  fetching: false,
  fetched: false

  // Array characters, Boolean fetching, null error.
};

                              // state can be named previousState
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
     // return Object.assign( {}, state, {error: 'fetching: true'});
     return Object.assign( {}, state, { fetching: true  });


    case SUCCESS:
      return Object.assign( {}, state, {
        fetching: false,
        fetched: true,
        characters: [...state.characters, ...action.payload]
      });



      /*return {...state,
        characters: [...state.characters, ...action.characters],
        fetching: false,
        error: ''
      };
      */

    case FAILURE:
      // return Object.assign( {}, state, {error: action.error, fetching: false} );
      return Object.assign( {}, state, {
        fetching: false,
        error: action.payload

      } );

    default:
      return state;
  }
};
