// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios';

export const REQUEST_FETCHING = 'REQUEST_FETCHING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';


export const userRequest = () => {
    return function(dispatch) {
        axios.get('https://swapi.co/api/people/')
            .then((response) => {
                dispatch({
                    type: REQUEST_SUCCESS, 
                    payload: response.data.results
                });
            })
            .catch((error)=> {
                console.log(error)
                dispatch({
                    types: REQUEST_FAILURE,
                    error
                });
            })
    }
}