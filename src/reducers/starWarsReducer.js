import { FETCHING_DATA, DATA_FETCH_SUCCESS, DATA_FETCH_ERROR } from "../actions";
import { Object } from "core-js";


const initialState = { data: [], fetchingData: false, error: "" };

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingData: true });
    case DATA_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, ...action.payload],
        fetchingData: false
      });
    case DATA_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingData: false,
        error: "Error fetching data"
      });
		default:
			return state;
	}
};
