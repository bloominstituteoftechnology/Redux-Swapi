// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const CHARS_FETCHED  = 'CHARS_FETCHED';
export const CHARS_FETCHING = 'CHARS_FETCHING';
export const ERROR          = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => {

    const getChars = axios.get('https://swapi.co/api/people');
    return function(dispatch) {
        
        dispatch:{type: CHARS_FETCHING}
        
        getChars
        .then(someData => {
            dispatch({type: CHARS_FETCHED, payload: someData.data.results})
            console.log('SOME DATA', someData);
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        })
    }
}
