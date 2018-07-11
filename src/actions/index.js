import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'

export const fetchChars = state => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get('https://swapi.co/api/people')
    .then(({ data }) => dispatch({ type: FETCHED, payload: data.results }))
    .catch(e => dispatch({ type: ERROR, payload: e })) 
}


