import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  characters: [], isFetching: false, 
  error: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
        return { ...state, isFetching: true };
      case FETCHED:
        return { ...state, isFetching: false,
        characters: [...state.characters, ...action.payload]
      };
      case ERROR:
        return {...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
