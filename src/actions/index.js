// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based



export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHAR_FETCHED_SUCCESS = 'CHAR_FETCHED_SUCCESS';
export const CHAR_FETCH_ERRROR = 'CHAR_FETCH_ERRROR';

export const fetchChars = () => {
    return dispatch => {
        dispatch({type: FETCHING_CHARS});
        axios
        .get('https://swapi.co/api/people/')

        .then(response =>{
            dispatch({type:CHAR_FETCHED_SUCCESS, payload: response.data.results});
        })
        .catch(err =>{
            console.log(err);
            dispatch({type:CHAR_FETCH_ERRROR});
        });
    };
};