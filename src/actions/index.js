import axios from 'axios';
export const FETCHING_STARWARS = 'FETCHING_STARWARS';
export const FETCHING_STARWARS_SUCCESS = 'FETCHING_STARWARS_SUCCESS';
export const FETCHING_STARWARS_FAILURE = 'FETCHING_STARWARS_FAILURE';


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
