// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios'

export const FETCHING = "FETCHING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const fetching = () => ({
    type: FETCHING
})

export const success = characters => ({
    type: SUCCESS,
    characters
})

export const error = () => ({
    type: FAILURE
})

export const fetchCharacters = () => dispatch => {

     // ************************* success isn't in codesandbox *************************
    dispatch(fetching())

    axios
        .get('https://swapi.co/ami/people/')
        .then(response => 
            dispatch(success(response.data.results)))
        .catch(err => 
            dispatch(error(err))
        )
}