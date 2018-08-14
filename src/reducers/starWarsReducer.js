// import /* we need our action types here*/ '../actions';
const initialState = {
  chars: [],
  fetchingData: false, 
  fetchedData: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {...state,
        fetchingData: true
      };
    case 'DATA_FETCH_SUCCESS':
      return {
        ...state,
        chars: [
          ...state.chars, 
          ...action.results
        ],
        fetchingData: false,
        fetchedData: true
      };
    case 'DATA_FETCH_ERROR':
      return {
        ...state,
          fetchingData: false,
          error: 'Error fetching data'
        };
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
