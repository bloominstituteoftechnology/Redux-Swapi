// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
const url = `https://swapi.co/api/people/`;


export const fetchingData = () => {
 return dispatch => {
     dispatch({type: FETCHING});
        axios 
        .get(url)
        .then(({data}) => {
            dispatch({type:FETCHED, payload: data.results});
        })
        .catch(error => {
            dispatch({type:ERROR, payload:error});
        });
};
};