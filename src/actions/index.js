import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_ERROR = 'FETCH_ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const getCharacters = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_REQUEST });

        axios.get(`https://swapi.co/api/people/`)
            .then(({ data }) => {
                dispatch({ type: FETCH_COMPLETE, payload: data.results });
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err });
            })
    }
}