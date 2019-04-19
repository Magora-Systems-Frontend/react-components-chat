import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import { store } from './configureStore';


ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  document.getElementById('root')
);
