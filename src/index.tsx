import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './core/redux/configureStore';

import App from './App';
import './index.scss';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
