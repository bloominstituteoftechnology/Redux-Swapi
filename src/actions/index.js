// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator


export const requestData = () => dispatch => {
    dispatch({type: SEND_REQUEST})
    axios
        .get('https://swapi.co/api/people/')
        .then(resp => {
            dispatch({
                type: REQUEST_SUCCESS,
                payload: resp.results
            })
        })
        .catch(err => {
            dispatch({
                type: REQUEST_FAIL,
                payload: err
            })
        });
}