// we'll need axios
import axios from 'axios';            // added


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

/*
export const fetch = () => {
  return dispatch => {
      dispatch({type: FETCHING});
      axios
        .get(`https://swapi.co/api/people`)                 // backticks !!!!!
        .then(response => {
          console.log(response);
          dispatch({
            type: SUCCESS,
            characters: response.data.results
          })
        })
        .catch(error => {                                  // use dispatch!!!
          dispatch({type: FAILURE, error: 'URL not resolved'});
        })

  }


};
*/

export const fetch = () => {
  const starWarsChars = axios.get('https://swapi.co/api/people');

  return dispatch => {
    dispatch({ type: FETCHING});

    starWarsChars
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: 'URL not resolved'
        });

      });

  };

};
