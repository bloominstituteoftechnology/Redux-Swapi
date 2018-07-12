// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const CHARS_FETCHED = 'CHARS_FETCHED';
export const CHARS_FETCHING = 'CHARS_FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchChars = () => {
    const promise = axios.get('https://swapi.co/api/people/');
    return function (dispatch) {
        dispatch({type: CHARS_FETCHING});
        promise.then(response => {
            console.log('MY RESPONSE',response);
            dispatch({type: CHARS_FETCHED, payload: response.data.results})
        })
        .catch(err => {
            dispatch({ type: FETCH_ERROR,  payload:'error fetching characters'})
        })
    }
}
