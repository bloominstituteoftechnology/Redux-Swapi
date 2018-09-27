import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_DATA = "FETCHING-DATA";
export const FETCHED_DATA = "FETCHED_DATA";
export const FETCHING_ERROR = "FETCHING_ERROR";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middleware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based

export const fetchingData = () => dispatch => {
  dispatch({
    type: FETCHING_DATA
  });

  axios
    .get("https://swapi.co/api/people/")
    .then(
      res => dispatch(fetchedData(res.data.results)),
      dispatch({ type: FETCHING_DATA })
    )
    .catch(err => dispatch(fetchingError(err)));
};

export const fetchingError = error => dispatch => {
  dispatch({
    type: FETCHING_ERROR,
    payload: error
  });

  export const fetchedData = results => dispatch => {
    dispatch({
      type: FETCHED_DATA,
      payload: results
    });
  };
};
