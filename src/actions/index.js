import axios from 'axios'
// we'll need axios

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'

export const FETCHING = 'FETCHING'


export const getSwChars = () => dispatch => {
  dispatch({type: FETCHING})
  axios
  .get('https://swapi.co/api/people')
  .then(response => {
   console.log("Response is:",response)

   dispatch({
    type: SUCCESS,
    payload: response.data.results
   })
   console.log(response)
  })
  .catch(err => {
   dispatch({type: FAILURE, payload: "Sorry, data not found!"})
   console.log(err)
  })


}

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
