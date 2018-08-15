import {fetchingData} from  '../actions';

const initialState = {
  characters: [], 
  fetchingData: false, 
  dataFetched: false, 
  error: null, 
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case('FETCHING_DATA'): 
      return Object.assign({}, state, {fetchingData: true}) 
    case('FETCHED_DATA'):
      console.log(action.payload)
      return Object.assign({}, state, {dataFetched: true, fetchingData: false, characters: action.payload
      })
    case('ERROR_FETCHING'):
      return Object.assign({}, state, {fetchingData: false, error: action.payload})  
    default:
      return state;
  }
};
