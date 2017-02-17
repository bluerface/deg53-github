import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import initStore from './initStore';

let store = initStore();

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
