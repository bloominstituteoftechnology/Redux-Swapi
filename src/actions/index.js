import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'

export const setFetching = () => ({
  type: FETCHING
})

export const setFetched = chars => ({
  type: FETCHED,
  chars
})

export const setError = () => ({
  type: ERROR
})

export const fetchData = () => dispatch => {
  dispatch(setFetching())

  axios
    .get('https://swapi.co/api/people/')
    .then(res => dispatch(setFetched(res.data.results)))
    .catch(err => dispatch(setError(err)))
}

