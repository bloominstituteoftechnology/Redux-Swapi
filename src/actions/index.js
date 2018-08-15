import axios from 'axios';

const FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
	FETCH_FAILURE = 'FETCH_FAILURE';

const fetchData = URL => dispatch => {
	dispatch({ type: FETCH });
	axios
		.get(URL)
		.then(res => {
			dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: FETCH_FAILURE, payload: err });
		});
};

export { FETCH, FETCH_SUCCESS, FETCH_FAILURE, fetchData };
