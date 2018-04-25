// we'll need axios
import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const DATA_FETCHED = 'DATA_FETCHED'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchingData = () => ({
  type: FETCHING_DATA,
})

export const fetchError = error => ({ type: FETCH_ERROR, error })

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const fetchData = () => {
  return dispatch => {
    // Let reducers know we're fetching:
    dispatch(fetchingData())

    axios.get('https://swapi.co/api/people/')
      .then(({ data }) => {
	console.log(data)
	dispatch({
	  type: DATA_FETCHED,
	  payload: data.results,
	})
      })
      .catch(e => fetchError(e))
  }
}

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
