// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHARS_FETCHING = 'CHARS_FETCHING'
export const CHARS_FETCHED = 'CHARS_FETCHED'
export const CHARS_FETCH_ERROR = 'CHARS_FETCH_ERROR'
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
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