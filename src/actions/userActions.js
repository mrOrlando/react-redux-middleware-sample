export const fetchUserRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
});

export const fetchUserSuccess = payload => ({
  type: 'FETCH_USERS_SUCCESS',
  payload,
});

export const fetchUserFailure = error => ({
  type: 'FETCH_USERS_FAILURE',
  error,
});
