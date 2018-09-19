
import {FETCHING_DATA, FETCHED_DATA, ERROR_FETCHING} from '../actions';


const initialState = {
  characters:[],
  fetchingData: false,
  dataFetched: false,
  error:null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
    return {...state, fetchingData: true};
    case FETCHED_DATA:
    console.log(action.payload);
    return{...state, 
    fetchedData:true,
    fetchingData: false,
    characters: action.payload
  };


    case ERROR_FETCHING:
      return {...state, fetchingData: false, error: action.payload };

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    //Object.assign({}, state, {fetchingData: true})
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
