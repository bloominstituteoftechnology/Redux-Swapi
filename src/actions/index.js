import axios from "axios";
export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
export const FETCHING_CHARACTERS_FAILURE = "FETCHING_CHARACTERS_FAILURE";

// we'll need axios

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCHING_CHARACTERS });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch({ type: FETCHING_CHARACTERS_SUCCESS, payload: res.data.results }); //res.data.message might need to be adjusted
    })
    .catch(err => {
      dispatch({ type: FETCHING_CHARACTERS_FAILURE, payload: err });
    });
};

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
