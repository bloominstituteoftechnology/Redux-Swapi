import axios from "axios";

<<<<<<< HEAD
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

export const getCharacters = () => {
  return dispatch => {
    dispatch({ type: GET_CHARACTERS });
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_CHARACTERS_ERROR, payload: err });
      });
  };
};
=======
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
>>>>>>> 8f9d32cbac00644036daa58a0375eaf72bd345fe
