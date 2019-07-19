// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING'

export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'

export const FETCHING_FAILED = 'FETCHING_FAILED'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function getCharacters() {
    return (dispatch) => {
        dispatch({type: FETCHING})

        axios.get('http://swapi.co/api/people')
            .then((response) => {
                dispatch({ type: FETCHING_SUCCESS, payload: response.data })
            })
            .catch((err) => {
                dispatch( { type: FETCHING_FAILED, payload: err.response.data })
            })
    }
}