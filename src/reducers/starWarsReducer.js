import /* we need our action types here*/ '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetchingData: false,
  dataFetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case "FETCHING_DATA":
        return {...state, fetchingData: true};
      case "DATA_FETCHED":
        return {
        ...state,
        characters: action.payload,
        fetching: false,
        fetched: true
      };
      case "ERROR_FETCHING":
        return { 
          ...state, 
          fetching: false,
          error: action.payload 
        };
      default:
        return state;
  }
};
