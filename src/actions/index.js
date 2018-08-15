import axios from 'axios' 

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHED_DATA = 'FETCHED_DATA'
export const ERROR = 'ERROR'

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
export const fetchCharacters = () => {
    return function (dispatch) {
        dispatch({ type: FETCHING_DATA})
        axios.get(`https://swapi.co/api/people/`)
            .then(res => {
                dispatch({ type: FETCHED_DATA, payload: res.data.results})
            })
            .catch(err => {
                console.error(err);
                dispatch({ type: ERROR })
            })
    }
}
