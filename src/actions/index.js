
import axios from "axios";
// we'll need axios
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_ERR = 'FRIENDS_ERR'
// we'll need to create 3 different action types here.

export const fetchCharacters = () => dispatch => {
    const promise = axios.get('https://swapi.co/api/people')
    dispatch({type: FETCHING_FRIENDS})
    promise
    .then(({data}) => {
        dispatch({type: FRIENDS_SUCCESS, payload: data.results})
    })
    .catch(err => {
        dispatch({type: FRIENDS_ERR, payload: err})
    })

   
}

// one for fetching, one for success and one for failure
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
