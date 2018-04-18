import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const FETCH_STARTED = 'FETCH_STARTED'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export default () => {
  const request = axios.get('https://swapi.co/api/people')
  return (dispatch) => {
    dispatch({ type: FETCH_STARTED })
    request
      .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data.results }))
      .catch(error => dispatch({ type: FETCH_ERROR, payload: error }))
  }
}
