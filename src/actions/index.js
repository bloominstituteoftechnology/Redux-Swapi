import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";


// export function fetchData() {
//     return function(dispatch) {
//         dispatch({ type: FETCHING});
//         axios.get("https://swapi.co/api/people/")
//             .then((res) => {
//                 console.log('Fetch Data Response:', res)
//             })
//             .catch((err) => {
//                 console.log('Error from Fetch Data:', err)
//             })
//     }
// }


export const fetchData = () => dispatch => {
    console.log('hello')
    dispatch({ type: FETCHING});
    axios.get('https://swapi.co/api/people/')
        .then(({res}) => dispatch({ type: SUCCESS, payload: res.results }))
        .catch(err => dispatch({ type: FAILED, payload: err }))
};




// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator