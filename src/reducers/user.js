import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/userTypes';

const initState = {
  isFetching: false,
  isFetched: false,
  users: [],
  error: null,
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
