import { SEARCH_USERS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
  }
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};