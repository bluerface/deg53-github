import {combineReducers} from 'redux';
import types from '../types';

var initialState = {
  repos: {
    byId: {},
    allIds: []
  },
  readmes: {
    byId: {},
    allIds: []
  }
};

export default combineReducers({
  repos: reposReducer,
  readmes: readmesReducer
});

export function reposReducer (state = initialState.repos, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_SEARCH_RESULTS_REQUEST:
      newState = {byId: {}, allIds: []};
      break;

    case types.FETCH_SEARCH_RESULTS_SUCCESS:
      newState = normalise(action.repos);
      break;

    default:
      return state;
  }
  return newState;
}

export function readmesReducer (state = initialState.readmes, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_README_SUCCESS:
      newState.byId = Object.assign({}, state.byId);
      newState.byId[action.id] = action.readme;
      newState.allIds = state.allIds.concat([action.id]);
      break;

    case types.FETCH_SEARCH_RESULTS_REQUEST:
      newState = {byId: {}, allIds: []};
      break;

    default:
      return state;
  }
  return newState;
}

function normalise (reposArray) {
  var repos = {byId: {}, allIds: []};
  return reposArray.reduce((acc, repo) => {
    acc.byId[repo.id] = repo;
    acc.allIds.push(repo.id);
    return acc;
  }, repos);
}

export function getReposArray (state) {
  return state.repos.allIds.map((id) => state.repos.byId[id]);
}
