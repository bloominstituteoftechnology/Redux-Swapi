// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const FETCHING = 'FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ERROR = 'ERROR'

export const fetchSwapi = () => {
  
  return dispatch =>  {  
    dispatch({ type: FETCHING });

    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data.message });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      })
  }
}

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
