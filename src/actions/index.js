// we'll need axios
import Axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based...?
const dataSource = 'https://swapi.co/api/people/';

export const fetchChars = () => {
    return dispatch => {
        dispatch( { type: FETCHING } );
        Axios
            .get(dataSource)
            .then( (response) => {
                console.log('fetch response:', response);
                dispatch( { type: FETCHED, payload: response.data.results } );
            })
            .catch( (err) => {
                dispatch({ type: FETCH_ERROR, payload: err.message });
            });
    }
};
