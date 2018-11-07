// we'll need axios
import axios from "axios";


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


// our action creator will be a function that returns a function

export const fetchPeople = people => {
return dispatch => 

axios
.get(`https://swapi.co/api/${people}/name`)
    .then(response => {
        dispatch({
            type: SUCCESS,
            payload: response.data.people
        });
    } )
    .catch(err => {
        dispatch({ type: FAILURE, payload: "Unrecognized entry"})
    } )
}
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
