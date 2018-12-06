// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHAR_REQUEST = 'FETCH_CHAR_REQUEST';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';
//why do we need to explicitly state the variables in our actions file?

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

// what is the point of an anon function that returns a function that is named? 
export const fetch_chars = () => dispatch => {
    dispatch({ type: FETCH_CHAR_REQUEST });
    
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {console.log(response);
        dispatch({ type: FETCH_CHAR_SUCCESS, payload: response.data.results});}
    )
    .catch(err => {dispatch({ type: FETCH_CHAR_FAILURE, payload: err});
});

};
