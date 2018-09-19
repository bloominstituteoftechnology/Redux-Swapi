// Dependencies
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchSwapi = () => dispatch => {
	dispatch({ type: FETCHING });

	axios
		.get('https://swapi.co/api/people/')
		.then(res => {
			dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: FETCH_ERROR });
		});
}
