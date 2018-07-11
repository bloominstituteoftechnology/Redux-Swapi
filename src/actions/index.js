import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'
export const fetching = () => {
  const url = `https://swapi.co/api/people/`
  const request = axios.get(url)
  return (dispatch) => {
    dispatch({ type: FETCHING })
    request
      .then((res) => dispatch({ type: FETCHED, payload: res.data.results }))
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
