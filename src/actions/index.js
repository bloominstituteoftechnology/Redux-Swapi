import axios from 'axios';
import { get } from 'http';

export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const CHARACTER_FETCH_SUCCESS ='CHARACTER_FETCH_SUCCESS';
export const CHARACTER_FETCH_ERROR = 'CHARACTER_FETCH_ERROR';

export const fetchCharacters = () => {
    console.log('action start')
    return dispatch => {
        dispatch({ type: FETCHING_CHARACTERS })
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                dispatch({ type: CHARACTER_FETCH_SUCCESS, payload: response.data.results})
                console.log("response", response.data.results)
            })
            .catch(err => {
                dispatch({ type: CHARACTER_FETCH_ERROR})
            })
    }
}
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator






