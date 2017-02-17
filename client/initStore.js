import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './redux/reducers';

function initStore () {
  let store = createStore(
    reducer,
    applyMiddleware(thunk, createLogger())
  );

  return store;
}

export default initStore;
