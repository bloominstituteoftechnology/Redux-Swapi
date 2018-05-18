import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const thingThatFetches = () => {
  return function (dispatch) {
    axios.get(`https://swapi.co/api/people`)
      .then( response => {
	dispatch({ type: FETCHED, payload: response.data.results });
      })
      .catch(error => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};
// I modeled this off of what was in the training kit. My thingThatFetches is the action creator, and dispatch is kind of a middleman that then sends the action off to the reducer. Dispatch is part of thunk and it controls when things get sent to the reducer. This was the biggest change from the Todo project.

export default thingThatFetches;
