import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    const request = axios.get(`https://swapi.co/api/people/`)
    request.then(res => {
        dispatch({type: SUCCESS, payload: res.data.results})
    })
    .catch(error42 => {
        dispatch({
            type: FAILURE, 
            payload: error42
        });
    });
}
