// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios';

///Action Types
export const GETTING_CHARACHTERS = 'GETTING_CHARACHTERS';
export const SUCCESS_GETTING_CHARACHTERS = 'SUCCESS_GETTING_CHARACHTERS'
export const GET_CHARACHTERS_ERROR = 'GET_CHARACHTERS_ERROR';


//action creator
export const getCharachters = () => {
    return dispatch => {
        dispatch({ type: GETTING_CHARACHTERS});
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log('Response is: ', response);
                dispatch({type: SUCCESS_GETTING_CHARACHTERS, payload: response.data.results});
            })
            .catch(err => {
                console.log('error is: ', err);
                dispatch({type: GET_CHARACHTERS_ERROR});
            })
    }
}
