import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const fetchChars = () => {
    return (dispatch) => {
        dispatch({type: FETCHING})
        axios.get(`https://swapi.co/api/people/`)
        .then( response => {
            dispatch({type: FETCHING, characters: response.data })
        })
        .catch( err => {
            dispatch({type: ERROR, errorMessage: "Can not fetch Characters"})
        })
    }
}

export const getChars = () => {
    return (dispatch) => {
        dispatch({type: SUCCESS})
        axios.get(`https://swapi.co/api/people`)
        .then( response => {
            dispatch({type: SUCCESS, characters: response.data.results, })
        })
        .catch ( err => {
            dispatch({type: ERROR,  errorMessage: "Can not fetch Characters"})
        })
    }
}

