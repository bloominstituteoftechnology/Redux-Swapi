// we'll need axios
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = () => {
    const request = axios
        .get('https://swapi.co/api/people');
        return (dispatch) => {
            dispatch({type: FETCH_DATA});
            request.then(({data}) =>{
            dispatch({type: FETCH_SUCCESS, payload: data.chars})
        })
        .catch(err => {
            dispatch({type: FETCH_FAILURE, error: err});
        })
        }
}
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
