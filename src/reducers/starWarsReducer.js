import { FETCH_DATA_START, FETCH_DATA_GOOD, FETCH_DATA_FAIL } from "../actions";


const initialState = {
    characters: [],
    error: null,
    fetching: false,

};
export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fill me in with the important reducers
        // action types should be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.
        case FETCH_DATA_START:
            return {
              ...state,
              fetching: true
            };
        case FETCH_DATA_GOOD:
            return {
              ...state,
              error: null,
              fetching: false,
              characters:action.payload,
            };
        case FETCH_DATA_FAIL:
            return {
              ...state,
              fetching: false,
              error: action.payload,
            };
        default:
            return state;
    }
};