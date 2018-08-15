import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchChars = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });

    axios.get('http://swapi.co/api/people')
          .then( res => dispatch({ type: FETCHED, payload: res.results }))
          .catch( err => dispatch({ type: ERROR, payload: err })
    );
  }
}
