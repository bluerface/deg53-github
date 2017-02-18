import {combineReducers} from 'redux';

import types from '../types';

var initialState = {
  search: {
    query: null,
    results: false,
    loading: false,
    error: null
  },
  readme: {
    id: null,
    results: false,
    loading: false,
    error: null
  }
};

export default combineReducers({
  search: searchReducer,
  readme: readmeReducer
});

export function searchReducer (state = initialState.search, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_SEARCH_RESULTS_REQUEST:
      newState.loading = true;
      newState.query = action.query;
      newState.error = null;
      newState.results = false;
      break;

    case types.FETCH_SEARCH_RESULTS_SUCCESS:
      newState.loading = false;
      newState.results = true;
      break;

    case types.FETCH_SEARCH_RESULTS_ERROR:
      newState.loading = false;
      newState.error = action.err;
      newState.results = false;
      break;

    default:
      return state;
  }
  return newState;
}

export function readmeReducer (state = initialState.readme, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_README_REQUEST:
      newState.loading = true;
      newState.id = action.id;
      newState.error = null;
      newState.results = false;
      break;

    case types.FETCH_README_SUCCESS:
      newState.loading = false;
      newState.results = true;
      break;

    case types.FETCH_README_ERROR:
      newState.loading = false;
      newState.error = action.err;
      newState.results = false;
      break;

    default:
      return state;
  }
  return newState;
}
