// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING_DATA = 'FETCHING_DATA'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function getData() {
    return (dispatch) => {

        dispatch({ type: FETCHING_DATA })

        axios.get('https://swapi.co/api/people/')
            .then((response) => {
                dispatch( { type: LOAD_SUCCESS, payload: response.data })
            })
            .catch((err) => {
                dispatch( { type: LOAD_FAILURE, payload: err.response })
            })
    }
}