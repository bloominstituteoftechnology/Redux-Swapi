// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const FETCHED = 'FETCHED';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getCharacters =() => {
  return dispatch => {
    dispatch({ type: FETCHING })

  axios.get ('https://swapi.co/api/people/')
    .then( (response) => {
      console.log(response);
      dispatch({ type: FETCHED, characters: response.data.results })
    })
    .catch( err => {
      dispatch({ type: ERROR })
    });
  }
}