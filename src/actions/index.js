// we'll need axios
import axios from 'axios'
let url = 'https://swapi.co/api/people/';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';

export const getData = () => {
  console.log('getData envoked')
  return function(dispatch) {
    dispatch({type: FETCHING});
    setTimeout(() => {
    axios.get(url).then(res => {
        dispatch({type: FETCHED, payload: res.data})
      }).catch(err => {
        console.log('err')
        dispatch({type: ERRORS, payload: err})
      })//catch;
    }, 2000)


  }//return
}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charaters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
