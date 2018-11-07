// we'll need axios
import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchData = () => {
  //   console.log('inside fetchData');
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        // console.log('respone: ', response);
        dispatch({
          type: SUCCESS,
          payload: response.data.results.slice(0, 10)
        });
      })
      .catch(err => {
        console.log('ERROR');
        dispatch({ type: FAILURE, payload: 'Failed to load data' });
      });
  };
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
