// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const fetchCharacters = () => {
  const promise = axios.get('https://swapi.co/api/people/');
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
    .then(response => {
      console.log(response);
      dispatch({type: FETCHED, payload: response.data.results })
    })
    // promise.then(({ data }) => {
    //     dispatch({ type: FETCHED, payload: data.things })
    //   })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

// EXAMPLE (from readme)

// function myCleverAction = () => {
//   const request = axios.get('https://someRadUrlAPI.com/api/coolness);
//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({type: GET_COOL_THING, payload: data.things});
//     })
//     .catch(err => {
//       dispatch({type: ERROR_GETTING_THINGS, error: err});
//     });
//   };
// };