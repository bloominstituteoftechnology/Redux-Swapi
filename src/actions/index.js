// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS'

export const getCharacters = () => (dispatch) =>{
//get request

dispatch({ type: FETCHING });
axios
  .get('https://swapi.co/api/peoples')
  .then(res => {

    dispatch({ type: SUCCESS, payload: res.data.results });
  })
  .catch(err => {
    console.log(err.response);
    dispatch({
      type: FAILURE,
      payload: `${err.response.status} ${err.response.statusText} `,
    });
  });
    
}
