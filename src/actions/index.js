import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'

export const fetching = () => {
  const url = `https://swapi.co/api/people/`
  const request = axios.get(url)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => dispatch({ type: FETCHED, payload: res.data.results }))
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
