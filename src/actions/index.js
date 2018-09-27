// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export const FETCHING_PEEPS = 'FETCHING_PEEPS';
export const FETCHED_PEEPS = 'FETCHED_PEEPS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStarWarsPeeps = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING_PEEPS });
		axios
			.get('https://swapi.co/api/people/')
			.then((response) => {
				dispatch({ type: FETCHED_PEEPS, payload: response.data.results });
			})
			.catch((err) => {
				dispatch({ type: FETCH_ERROR });
			});
	};
};
