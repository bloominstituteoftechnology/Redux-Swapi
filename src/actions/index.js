import axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR'
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchChars = request => {
  return dispatch => {
    dispatch({type: LOADING});
    axios 
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response)
        dispatch({
          type: SUCCESS,
          payload: response.data.results
          });

      })
      .catch(err => {
        dispatch({type: ERROR, payload: 'Cant Find These Swapis'})
      })
  }
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator




