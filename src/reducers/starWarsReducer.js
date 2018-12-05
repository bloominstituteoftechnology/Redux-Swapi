import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    characters: [],
    fetching: true,
    error: null
    // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                characters: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        // Fill me in with the important reducers
        // action types should import { FETCH_FAILURE, FETCH_START } from './../actions/index'; //be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.
        default:
            return state;
    }
};
