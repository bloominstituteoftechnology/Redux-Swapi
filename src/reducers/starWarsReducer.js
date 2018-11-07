import {FETCHING, FAILURE, SUCCESS} from "../actions";

const initialState = {
    characters: [],
    loading: false,
    error: false
};

export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state, ...{
                    characters: action.characters,
                    loading: false
                }
            };
        case FETCHING:
            return {...state, ...{loading: action.loading}};
        case FAILURE:
            return {...state, ...{error: action.error}};
        default:
            return state;
    }
};
