// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHAR = 'FETCHING_CHAR';
export const FETCHING_CHAR_SUCC = 'FETCHING_CHAR_SUCC';
export const FETCHING_CHAR_FAIL = 'FETCHING_CHAR_FAIL';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchChar = () => dispatch => {
    dispatch({type: FETCHING_CHAR });
    axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log('res', response)
            dispatch({type: FETCHING_CHAR_SUCC, payload: response.data.results});
        })
        .catch(err => {
            dispatch({type: FETCHING_CHAR_FAIL, payload: err})
        })
}