import { createStore, applyMiddleware } from 'redux';

import { rootReducer, initialState } from './reducers'

import apiMiddleware from './apiMiddleware';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware
    )
  );

  return store;
}

export default configureStore;