// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';
export const CHARS_ERROR = 'CHARS_ERROR';
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"

export const fetchChars = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return function(dispatch) {
        dispatch({type: FETCHING_CHARS});
        promise.then((response) => {
            console.log(response);
            dispatch({type: CHARS_FETCHED, payload: response.data.results})
        })
        .catch(err => {
            dispatch({type:CHARS_ERROR, msg: 'Error fetching chars'})
        })
    }
}

// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
