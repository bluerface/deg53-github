import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import initStore from './initStore';

let store = initStore();

import App from './components/App';
import SearchPage from './components/SearchPage';
import RepoDetails from './components/RepoDetails';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={SearchPage} />
        <Route path='/details/:id' component={RepoDetails} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
