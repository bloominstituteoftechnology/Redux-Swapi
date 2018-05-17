// we'll need axios
import axios from 'axios'
export const FETCHED_CHARS = 'FETCHED_CHARS';
export const FETCHING_CHARS = 'FECTHING_CHARS';
export const ERROR = 'ERROR';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const fetchChars = () => {
    const getChars= axios.get('https://swapi.co/api/people/')
    return function(dispatch) {
        dispatch({ type: FETCHING_CHARS });
        getChars
            .then(someData =>{
                console.log("response",someData);
                dispatch({ type: FETCHED_CHARS, payload: someData.data.results});
                
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err});
            });
    };
};

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
