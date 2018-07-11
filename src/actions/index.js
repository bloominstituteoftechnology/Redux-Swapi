import axios from 'axios';
// we'll need axios
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHED_DATA = "FETCHED_DATA";
export const ERROR = "ERROR";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchData = () => {
    const request = axios.get('https://swapi.co/api/people/');
    return (dispatch) => {
        dispatch( {type: FETCHING_DATA });
        request.then(response => {
            console.log(response.data);
            dispatch({type: FETCHED_DATA, payload: response.data.results });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        });
    }
}