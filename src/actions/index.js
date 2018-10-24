// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_FAILURE = "GET_CHARACTERS_ERROR";
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based


export const getCharacters = () => {
    const promise = axios.get("https://swapi.co/api/people");
    return dispatch => {
      dispatch({ type: GET_CHARACTERS });
  
      promise
        .then(response => {
          dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: response.data.characters
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: GET_CHARACTERS_FAILURE });
        });
    };
  };