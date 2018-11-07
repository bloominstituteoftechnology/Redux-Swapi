import axios from "axios"

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const FETCHING = "FETCHING";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING, loading: true });

    axios
        .get(`https://swapi.co/api/people/`)
        .then(({ data }) => {
            console.log(data);
            dispatch({ type: SUCCESS, characters: data.results, loading: false });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err, loading: false});
        });
};