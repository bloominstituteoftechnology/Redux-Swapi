// we'll need axios
import axios from 'axios'; 
export const FETCHING = 'FETCHING'; 
export const FETCHED = 'FETCHED'; 
export const ERROR = 'ERROR'; 

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetching = () => {
    return {
        type: FETCHING,
    }
}

export const fetched = (data) => {
    return {
        type: FETCHED, 
        payload: data
    }
}

export const error = (data) => {
    return {
        type: ERROR, 
        payload: data
    }
}

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const actionCreator = () => {
    const getChars = axios.get('https://swapi.co/api/people/'); 
    return function(dispatch) {
        dispatch(fetching()); 
        getChars
            .then(response => dispatch(fetched(response.data.results)))
            .catch(err => dispatch(error(err)))
    }
}