import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_MOVIE = "FETCHING_MOVIE";
export const FETCHING_MOVIE_SUCCESS = "FETCHING_MOVIE_SUCCESS";
export const FETCHING_MOVIE_FAILED =  "FETCHING_MOVIE_FAILED"; 


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchMovie = () => dispatch => {
    dispatch({ type: FETCHING_MOVIE });
    axios.get("https://swapi.co/api/people/")
         .then(response => {
             console.log("iinside actions", response)
            dispatch({ type: FETCHING_MOVIE_SUCCESS, payload: response.data.results})
         })
         .catch(error =>{
             dispatch({ type: FETCHING_MOVIE_FAILED, payload: error})
         })
}