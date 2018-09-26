// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCH_IN_PROGRESS = "FETCH_IN_PROGRESS"
export const FETCH_SUCCESS = "FETCH_SUCCESSFUL"
export const FETCH_FAIL = "FETCH_FAILURE"

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based
export const SwapiFetch = () => {
  return dispatch => {
    dispatch({type: FETCH_IN_PROGRESS})
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data.results
        })
      })
      .catch(e => {
        console.log(e)
        dispatch({
          type: FETCH_FAIL,
          payload: e
        })
      })
  }
}
