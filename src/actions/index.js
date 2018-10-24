// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_STARWARS = 'FETCHING_STARWARS';
export const FETCHING_STARWARS_SUCCESS = 'FETCHING_STARWARS_SUCCESS';
export const  FETCHING_STARWARS_FAILURE = ' FETCHING_STARWARS_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchStarWars = () => dispatch => {
    dispatch({ type : FETCHING_STARWARS });
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log("Response after data fetching : ",response);
            dispatch({ type : FETCHING_STARWARS_SUCCESS, payload : response.data.results });  
         })
        .catch(error => {
            console.log(error);
            dispatch({ type : FETCHING_STARWARS_FAILURE, payload : error});
         });
}