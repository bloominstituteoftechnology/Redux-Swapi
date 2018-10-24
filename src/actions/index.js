import axios from 'axios';

export const FETCHING_FRIENDS = 'fetching_friends';
export const FETCHING_FRIENDS_SUCCESS = 'fetching_friends_success' 
export const FETCHING_FRIENDS_FAILURE = 'fetching_friends_failure'


export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });

    axios.get('https://swapi.co/api/people')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err})
        });
};

