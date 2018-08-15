import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based

export const fetching = () => {

  return (dispatch) => {
    dispatch({type: FETCHING});
    axios.get('https://swapi.co/api/people/')
    .then(({data}) => {
      dispatch(fetched(data));
    })
    .catch(error => {
      dispatch(error(error));
    });
  };
};

export const fetched = (data) => ({
    type: FETCHED,
    payload: data,
    loading: false
});


export const error = (error) => ({
    type: ERROR,
    error
})

