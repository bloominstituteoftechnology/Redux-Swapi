// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCHING_ACTION = 'FETCHING_ACTION';
export const FETCHED_ACTION = 'FETCHED_ACTION';
export const ERROR_ACTION = 'ERROR_ACTION';

export const getChars = () => {
    return function(dispatch) {
        dispatch({type: FETCHING_ACTION});

        axios.get("https://swapi.co/api/people/")
        .then((data) => {
            dispatch({ type: FETCHED_ACTION, payload: data.data.results});
        })
        .catch(err => {
            dispatch({type: ERROR_ACTION, payload: err});
        });
        }
    }


// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
