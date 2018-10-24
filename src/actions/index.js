// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
// our action creator will be a function that returns a function

export const getCharacters = charater => dispatch => {
  dispatch({ type: FETCHING });
  const url = 'https://swapi.co/api/people'

  axios
    .get(url)
    .then( ({ data }) => {
      console.log(data)
      dispatch({ type: SUCCESS, data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FAILURE, err})
    })
}
