// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = "FETCHING_DATA"
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS"
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"

export const fetchData = () => dispatch => {
  dispatch({ type: FETCHING_DATA })
  axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      console.log("response", response)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: response.data.results })
    })
    .catch(error => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: error })
    })
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
