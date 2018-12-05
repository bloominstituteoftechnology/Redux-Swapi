// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
const urlLinks = {
  server: `https://swapi.co/api/people`,
  home: `/`
};

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err });
    });
};
