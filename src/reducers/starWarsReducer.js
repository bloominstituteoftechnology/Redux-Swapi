
import { 
ERROR_FETCHING_CHARS,
FETCHING_CHARS,
CHARS_FETCHED

} from '../actions'

const initialState = {

    chars: [],
    fetching: false,
    fetched: false,
    error: null
};



export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CHARS:
        return Object.assign({}, state, {fetching: true, fetched: false, error: null});
        
        case CHARS_FETCHED:
        return Object.assign({}, state, {fetching: false, chars: action.payload, fetched: true});

        case ERROR_FETCHING_CHARS:
        return Object.assign({}, state, {fetching: false, fetched: false, error: action.payload});

        default: 
        return state;
    }
}