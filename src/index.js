import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './main/store';
import App from './main/app';
import * as serviceWorker from './serviceWorker';

import './index.scss';
const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./main/app', renderApp);
}

renderApp();
serviceWorker.unregister();
