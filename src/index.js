import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk,promise()));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
