// we'll need axios
import axios from "axios";


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const LOADING = "LOADING";
export const SUCCESSFUL = "SUCCESSFUL";
export const ERROR = "ERROR";


// our action creator will be a function that returns a function

export const fetchChars = () => dispatch => {
dispatch({ type: LOADING});
axios
.get(`https://swapi.co/api/people/`)
    .then(response => {
        dispatch({
            type: SUCCESS,
            payload: response.data.RESULTS
        });
    } )
    .catch(response => {
        dispatch({ type: ERROR, error: response.message })
    } )
}
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
