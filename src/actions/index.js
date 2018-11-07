// we'll need axios
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetchData = () => {
  return { type: FETCH_DATA };
};

export const success = () => {
  return { type: SUCCESS };
};

export const failure = () => {
  return { type: FAILURE };
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
