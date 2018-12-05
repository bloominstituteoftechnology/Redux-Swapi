// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
//FETCHING, SUCCESS, FAILURE 
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const url = 'https://swapi.co/api/people';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(url)
        .then(response => {
            console.log(response.data);
            dispatch({ type: SUCCESS, payload: response.data.results })
        })
        .catch(error => {
            console.log(error.data)
            dispatch({ type: FAILURE, payload: error })
        });
}