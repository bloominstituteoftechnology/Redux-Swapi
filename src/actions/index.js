import axios from 'axios';

export const FETCHING_DATA='FETCHING_DATA';
export const FETCHED_DATA='FETCHED_DATA';
export const ERROR_FETCHING='ERROR_FETCHING';

export const fetchedData = data => {
    const request = axios.get("https://swapi.co/api/people/");
    return dispatch  => {
        dispatch({ type: 'FETCHING_DATA' })
        request
        .then(({ data }) => {
            dispatch({ type: 'FETCHED_DATA', payload: data.results });
        }).catch(err => {
            dispatch({ type: 'ERROR_FETCHING', payload: err })
        })
    }
};
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based