import { REQUEST_FETCHING, REQUEST_SUCCESS, REQUEST_FAILURE } from '../actions';


const initialState = {
  characters: [],
  isFetching: false,
  fetched: false,
  errors: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case REQUEST_FETCHING:
      return {
        ...state, 
        isFetching: true
      }; 
      
    case REQUEST_SUCCESS:
      return  {
        ...state,
        fetched: true,
        isFetching: false,
        characters: action.payload
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        fetched: false,
        isFetching: false,
        errors: [...state.errors, action.payload.errors]
      };

    default:
      return state;
  }
};
