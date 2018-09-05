import React from 'react';
import { Provider } from 'react-redux';
import Match from './views/Match';

import configureStore from './store/configStore'

const Root = () => {
  const store = configureStore();
  
  return (
    <Provider store={store}>
      <Match />
    </Provider>
  );
}

export default Root;