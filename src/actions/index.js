// we'll need axios DONE

// we'll need to create 3 different action types here. DONE
// one for fetching, one for success and one for failure DONE

// our action creator will be a function that returns a function DONE
// the url to fetch characters from is `https://swapi.co/api/people/`  DONE
// remember that now we have controll over our thunk-based action creator COPY


import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log("ALWAYS CONSOLE LOG HERE, YA GOOF!", response);
        dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err });
    });
};