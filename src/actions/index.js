import axios from 'axios'
// we'll need axios
export const FETCHING = 'FETCHING'

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'

export const LOADING = 'LOADING'


export const getSwChars = () => {
 return (dispatch) => {

  dispatch({type: LOADING})
  axios
  .get('https://swapi.co/api/people.')
  .then(response => {
   dispatch({
    type: FETCHING,
    payload: response.data
   })
  })
  .catch(err => {

  })

}


}

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
