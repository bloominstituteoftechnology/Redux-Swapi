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
            return {};
        case FETCH_DATA_GOOD:
            return {};
        case FETCH_DATA_FAIL:
            return {};



        default:
            return state;
    }
};