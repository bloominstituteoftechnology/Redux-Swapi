// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERROR = 'ERROR'

// fetch data
// sets fetching to true
// once data returns calls

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
  axios
    .get('https://swapi.co/api/people')
    .then(res => dispatch(setFetched(res.data)))
    .error(err => dispatch(setError(err)))
}
