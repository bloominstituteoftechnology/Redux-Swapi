// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
import axios from 'axios';

// action types
// export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

/************************
** ACTION DESCRIPTIONS **
************************/
// fetching
export const fetched = () => {
  const getCharacters = axios.get('https://swapi.co/api/people');
  
  return dispatch => {
    getCharacters
      .then(data => {
        const { results } = data.data;
        return dispatch({ type: FETCHED, payload: results })
      })
      .catch(err => {
        console.log('ERR', err);
        return dispatch({ type: ERROR, payload: err });
      });
  }
}