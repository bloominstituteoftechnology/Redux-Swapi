
import axios from "axios";                 

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_FAILURE = "GET_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
  dispatch({ type: GET_CHARACTERS });
  axios
    .get("https://swapi.co/api/people")
    .then(({ data }) => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CHARACTERS_FAILURE,
        payload: err
      });
    });
};



export default getCharacters;


/* this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
  // feel free to research what this code is doing.
  // At a high level we are calling an API to fetch some starwars data from the open web.
  // We then take that data and resolve it our state.
  fetch(URL)
    .then(res => {
      return res.js();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results, nextPage: data.next, prevPage: data.previous });
   
    })
    .catch(err => {
      /* console.log(err); */
  /*     throw new Error(err);
     
    }); */ 