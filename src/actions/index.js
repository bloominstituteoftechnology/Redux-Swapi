// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
import axios from 'axios'

export const FETCHING = 'FETCHING';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const FETCHED = 'FETCHED';

export const fetch = chars => {
    const promise = axios.get('https://swapi.co/api/people');
    return dispatch => { // pending state
      dispatch({ type: FETCHING });
      promise
        .then(({ data }) => { // resolved state
          dispatch({ type: FETCHED, payload: data.results });
        })
        .catch(error => { // rejected state
          dispatch({ type: ERROR_FETCHING, payload: error });
        });
    };
  };