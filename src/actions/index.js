// we'll need axios
import axios from 'axios';

export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS';
export const FETCHING_CHARACTERS_ERROR = 'FETCHING_CHARACTERS_ERROR';

export const fetchCharacters = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_CHARACTERS });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      console.log(response)
      dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: response.data.results });
    })
    .catch(error => {
      dispatch({ type: FETCHING_CHARACTERS_ERROR, payload: error });
    });
};


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
