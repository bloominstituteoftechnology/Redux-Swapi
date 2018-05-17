import axios from 'axios';
export const FETCHING_STARWARS = 'FETCHING_STARWARS';
export const STARWARS_FETCHED = 'STARWARS_FETCHED';
export const ERROR = 'ERROR';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchStarwars = () => {
    const getStarwars = axios.get( `https://swapi.co/api/people/`);
    return function(dispatch) {
        dispatch({ type: FETCHING_STARWARS });
        // FETCHING
        getStarwars
            .then(someData => {
                dispatch({type: STARWARS_FETCHED, payload: someData.data });
                // FETCHED
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
                // ERROR puts in a rejected state
            });
    };
};
