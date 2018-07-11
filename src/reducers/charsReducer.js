import { FETCHED } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED: {
      return [
        ...state,
        ...action.payload
      ];
    }
    default:
      return state;
  }
};
