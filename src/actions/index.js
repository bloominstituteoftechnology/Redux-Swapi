// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_PEOPLE = 'FETCHING_PEOPLE';
export const PEOPLE_FETCH_SUCCESS = 'PEOPLE_FETCH_SUCCESS';
export const PEOPLE_FETCH_ERROR = 'PEOPLE_FETCH_ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchPeople = () => {
    return dispatch => {
        dispatch({ type: FETCHING_PEOPLE });
        axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                console.log(res);
                dispatch({ type: PEOPLE_FETCH_SUCCESS, payload: res.data.results })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: PEOPLE_FETCH_ERROR })
            });
    };
};