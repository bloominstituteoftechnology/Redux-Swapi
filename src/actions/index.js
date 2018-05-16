import axios from 'axios'; // we'll need axios

// we'll need to create 3 different action types here: fetching, fetched, errors
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchCharacters = () => {
  // create promise
  const getCharacters = axios.get('https://swapi.co/api/people/');

  // return dispatch function
  // handles all 3 action types since they are tied to promise
  return (dispatch) => {
    dispatch({type: FETCHING_CHARACTERS}); // fetching

    getCharacters
      .then(response => {
        dispatch({ // fetched
          type: FETCH_CHARACTERS,
          payload: response.data.results
        });
      })
      .catch(err => { // error
        dispatch({
          type: ERROR,
          payload: err
        })
      });
  };
};
