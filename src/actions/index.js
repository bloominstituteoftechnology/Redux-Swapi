// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

export const asyncFetchChars = () => {
	console.log("made it");
	const promise = axios.get("https://swapi.co/api/people");
	return dispatch => {
		console.log(dispatch);
		// fetching
		dispatch({ type: FETCHING });
		// fetched
		promise
			.then(response => {
				console.log(response);
				dispatch({ type: FETCHED, payload: response.data.results });
			}) // error
			.catch(error => {
				dispatch({ type: ERROR });
				console.error(error);
			});
	};
};
