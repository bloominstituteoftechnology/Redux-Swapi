// we'll need axios
import axios from 'axios';

export const FETCHING_STARWAR = 'FETCHING_STARWAR';
export const FETCHING_STARWAR_SUCCESS = 'FETCHING_STARWAR_SUCCESS';
export const FETCHING_STARWAR_FAILURE = 'FETCHING_STARWAR_FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchStarwar = () => dispatch => {
    // let's do some async stuff! Thanks react-thunk :)
    dispatch({ type: FETCHING_STARWAR });
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        dispatch({ type: FETCHING_STARWAR_SUCCESS, payload: response.data.results });
      })
      .catch(error => {
        dispatch({ type: FETCHING_STARWAR_FAILURE, payload: error });
      });
  };
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
