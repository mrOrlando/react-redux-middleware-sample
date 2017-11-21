import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import UsersList from './components/UsersList';

import { FETCH_USERS_REQUEST } from './actions/userTypes';
import { fetchUserSuccess, fetchUserFailure } from './actions/userActions';
import { user as rootReducer } from './reducers/user';

const userFetchingMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === FETCH_USERS_REQUEST) {
    fetch('http://www.json-generator.com/api/json/get/cpQqUZorNe?indent=2')
      .then(response => {
        return response.json();
      })
      .then(users => {
        store.dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        store.dispatch(fetchUserFailure(error));
      });
  }
  return result;
};

const store = createStore(rootReducer, applyMiddleware(userFetchingMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <UsersList />
  </Provider>,
  document.getElementById('root'),
);
