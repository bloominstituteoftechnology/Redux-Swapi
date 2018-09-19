// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const ERROR_FETCHING_CHARACTERS = "ERROR_FETCHING_CHARACTERS";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const getCharacters = characters => {
    const promise = axios.get('https://swapi.co/api/people/');

    return dispatch => {
        dispatch({type: FETCHING_CHARACTERS});
        promise
            .then(({data}) => {
                dispatch(
                    {
                        type: GET_CHARACTERS, 
                        payload: data.results
                    }
                );
            })
            .catch(error => {
                dispatch(
                    {
                        type: ERROR_FETCHING_CHARACTERS, 
                        payload: error
                    }
                );
            })
    }
}