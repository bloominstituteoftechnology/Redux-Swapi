// we'll need axios
import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchData = () => {
  return dispatch => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        //   dispatch({
        //       type: FETCHING,
        //       payload: {
        //           response
        //       }
        //   })
        console.log(response);
      })
      .catch(err => {
        console.log('ERROR');
      });
    return { type: FETCHING };
  };
};

export const success = () => {
  return { type: SUCCESS };
};

export const failure = () => {
  return { type: FAILURE };
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
