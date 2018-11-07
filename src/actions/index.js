// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
// one for fetching, one for success and one for failure

export const fetchCharacters = () => dispatch => {
  dispatch({type: FETCHING})
  axios.get('https://swapi.co/api/people')
    .then(res => {
      dispatch({type: SUCCESS, payload: res.data.results})
    })
    .catch(err => {
      dispatch({type: FAILURE, payload: err})
    })
}
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
