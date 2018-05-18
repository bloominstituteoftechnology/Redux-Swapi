// we'll need axios
import axios from 'axios';
 export const FETCHING_DATA = "FETCHING_DATA";
 export const FETCHED_DATA = "FETCED_DATA";
 export const ERROR_FETCHING = "ERROR_FETCHING";


// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetchData = () => {
    const people = axios.get(`https://swapi.co/api/people/`);
    return (dispatch => {
        dispatch({type: FETCHING_DATA})
        people.then((response) => {
        // console.log(response);
            dispatch({type: FETCHED_DATA, payload: response.data.results });
        })
        .catch((err) => {
            dispatch({type: ERROR_FETCHING, payload: err})
        });
    });
}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

