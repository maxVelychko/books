import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from 'store';
import { fetchBooks } from 'store/actions/dataActions';
import App from 'components/App';

import './index.scss';

const store = getStore();
// @ts-ignore
store.dispatch(fetchBooks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
