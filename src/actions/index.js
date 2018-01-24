// we'll need axios
import axios from 'axios'; 

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_RECEIVED = 'CHARS_RECEIVED';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

export const getChars = () => {
  const chars = axios.get('https://swapi.co/api/people/');
  return dispatch => {
    
    dispatch({ type: 'FETCHING_CHARS'});
    chars
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: CHARS_RECEIVED, payload: data.results })
        
      }) 
  }
}

