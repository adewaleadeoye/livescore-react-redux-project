import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers'

import apiMiddleware from './apiMiddleware';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      apiMiddleware
    )
  );

  return store;
}

export default configureStore;