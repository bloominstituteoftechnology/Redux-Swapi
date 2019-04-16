import {FETCH, SUCCESSFUL_HUNT, RETURNED_WITH_NOTHING} from "../actions"

const initialState = {
  characters: [],
  fetching: false,
  error: null,
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case SUCCESSFUL_HUNT:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case RETURNED_WITH_NOTHING:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
}