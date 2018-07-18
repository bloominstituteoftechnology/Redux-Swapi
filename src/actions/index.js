import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';


export const fetching = () => ({
    type: 'FETCHING'
});

export const fetched = () => ({
    type: 'FETCHED'
});

export const errors = () => ({
    type: 'ERRORS'
}); 

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
