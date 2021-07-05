// we'll need axios
import axios from 'axios';
export const FETCHED_INFO = "FETCHED_INFO";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getinfo = () => {

    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                dispatch({
                    type: FETCHED_INFO,
                    payload: response.data.results
                });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};