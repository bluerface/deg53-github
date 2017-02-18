import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import initStore from './initStore';

let store = initStore();

import App from './components/App';
import RepoDetails from './components/RepoDetails';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/details/:id' component={RepoDetails} />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
