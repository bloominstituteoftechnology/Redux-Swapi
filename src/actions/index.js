// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const CHARS_FETCHING = 'CHARS_FETCHING'
export const CHARS_FETCHED = 'CHARS_FETCHED'
export const FETCH_ERROR = 'FETCH_ERROR'
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
export function fetchChars() {
    return (dispatch) => {
        dispatch({type: "CHARS_FETCHING"})
        axios.get('https://swapi.co/api/people')
        .then((response) => {
            dispatch({type: "CHARS_FETCHED", payload: response.data.results})
        })
        .catch((err) => {
            dispatch({type: "CHARS_FETCH_ERROR", payload: err})
        })
    }
}