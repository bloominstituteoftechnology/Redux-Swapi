// we'll need axios
import axios from 'axios';
export const FETCHING_STARWARS = 'FETCHING_STARWARS';
export const FETCHING_STARWARS_SUCCESS = 'FETCHING_STARWARS_SUCCESS';
export const FETCHING_STARWARS_FAILURE = 'FETCHING_STARWARS_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure


export const fetchingStarwars = () => dispatch => {
    dispatch({ type: FETCHING_STARWARS });

    axios
        .get('https://swapi.co/api/people')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHING_STARWARS_SUCCESS, payload: response.data.results });
        })
        .catch(error => {
            dispatch({ type: FETCHING_STARWARS_FAILURE, payload: error });
        });
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
