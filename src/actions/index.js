// we'll need axios
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
const fetching = () => {
    return {
        type: FETCHING
    };
}

const fetched = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const errors = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

export const actionCreator = () => {
    const getChars = axios.get('https://swapi.co/api/people/');
    return function(dispatch) {
        dispatch(fetching());
        getChars
            .then( res => {
                dispatch(fetched(res.data));
            })
            .catch( err => {
                dispatch(errors(err));
            })
    }
}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based
