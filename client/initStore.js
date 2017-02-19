import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {debounce} from 'underscore';

import reducer from './redux/reducers';

function initStore () {
  var state = window.localStorage.getItem('state');
  state = state ? JSON.parse(state) : undefined;

  let store = createStore(
    reducer,
    state,
    applyMiddleware(thunk, createLogger())
  );

  function cacheStore () {
    window.localStorage.setItem(
      'state',
      JSON.stringify(store.getState())
    );
  }

  store.subscribe(debounce(cacheStore, 500));

  return store;
}

export default initStore;
