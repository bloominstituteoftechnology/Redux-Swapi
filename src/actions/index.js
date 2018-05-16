import axios from 'axios' // we'll need axios
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchChars = () => {
    const getChars = axios.get('https://swapi.co/api/people/');
    return function(dispatch) {
      dispatch({ type: FETCHING });
      getChars
        .then(response => {
          setTimeout(() => {
            dispatch({ type: FETCHED, payload: response.data });
          }, 1000);
        })
        .catch(err => {
          console.log(err);
        });
    };
  };