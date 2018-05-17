// we'll need axios
import axios from 'axios';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const ERROR = 'ERROR'

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchCharacters = () => {
    const getCharacters = axios.get(`https://swapi.co/api/people`);

    return function(dispatch) {
        dispatch({ type: FETCHING_CHARACTERS });

        getCharacters
            .then(res => {
                console.log('Res', res)
                dispatch({ type: FETCH_CHARACTERS, payload: res.data.results})
            })

            .catch(error => {
                dispatch({ type: ERROR, payload: error})
            })
    }
}