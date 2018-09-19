// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_FETCHED_SUCCESS = 'CHARS_FETCHED_SUCCESS';
export const CHARS_FETCHED_ERROR = 'CHARS_FETCHED_ERROR';


// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => dispatch => {
    dispatch({ type: FETCHING_CHARS });
    axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log('AXIOS RESPONSE:', response)
            // dispatch({type: CHARS_FETCHED_SUCCESS, payload: response.data.results})
        })
        .catch(error => {
            console.log(error)
            dispatch({type:CHARS_FETCHED_ERROR})
        })
}
