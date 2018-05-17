import axios from 'axios';
export const FETCHING_AVENGERS = 'FETCHING_AVENGERS';
export const AVENGERS_FETCHED = 'AVENGERS_FETCHED';
export const ERROR_FETCHING_AVENGERS = 'ERROR_FETCHING_AVENGERS';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const fetchAvengers = () => {
    const getAvengers = axios.get('https://swapi.co/api/people/`');
    return function(dispatch) {
        dispatch({ type: FETCHING_AVENGERS });
        
        getAvengers
        .then(someData => {
            dispatch({ 
                type: AVENGERS_FETCHED,
                payload: someData.data 
            });
        })
        .catch(err => {
            dispatch({ type: ERROR_FETCHING_AVENGERS });
        });
    };

}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
