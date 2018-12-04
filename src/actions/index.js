import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const ERROR = "FETCH_ERROR";
export const SUCCESS = "FETCH_SUCCESS";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchCharacters = () => {
  const swChars = axios.get("https://swapi.co/api/people/");
  return dispatch => {
    dispatch({ type: FETCHING });
    swChars
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data.results });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: `We've had an ${err}`
        })
      );
  };
};
