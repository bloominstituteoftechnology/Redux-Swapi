import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCH_CHARS = "FETCH_CHARS";
export const CHARS_FETCH_ERR = "CHARS_FETCH_ERR";
export const CHARS_FETCH_YES = "CHARS_FETCH_YES";

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"

