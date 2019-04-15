import axios from 'axios'

export const FETCH = 'FETCH'
export const SUCCESSFUL_HUNT = 'SUCCESSFUL_HUNT'
export const RETURNED_WITH_NOTHING = 'RETURNED_WITH_NOTHING'

export const hunt = () => dispatch => {
    console.log("made it here")
    dispatch({type: FETCH})
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log(res.data.results)
            dispatch({type: SUCCESSFUL_HUNT, payload: res.data.results})
            }
        )
        .catch(err => dispatch({type: RETURNED_WITH_NOTHING, payload: err}))
}