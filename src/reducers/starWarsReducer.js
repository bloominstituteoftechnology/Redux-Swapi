import { FETCHING_CHARACTERS, CHAR_FETCH_SUCCESS, CHAR_FETCH_ERROR} from '../actions';
import { EHOSTUNREACH } from 'constants';


const initialState ={

  chars: [], fetchingChars: false, fetchedChars : false,  error: ''
};
  const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_CHARACTERS:
      return Object.assign( {}, state, {fetchingChars: true} )

    case CHAR_FETCH_SUCCESS:
    return Object.assign({} , state, {chars:[...state.chars ,... action.payload],
       fetchedChars:true})

    case CHAR_FETCH_ERROR:
    return Object.assign({}, state, { error:'error fetching ...'})
    default:
      return state;
  }
};
 export  {charsReducer} ;