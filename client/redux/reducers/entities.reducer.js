import types from '../types';

var initialState = {
  repos: {
    byId: {},
    allIds: []
  }
};

export default function (state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_SEARCH_RESULTS_REQUEST:
      newState.repos = {byId: {}, allIds: []};
      break;

    case types.FETCH_SEARCH_RESULTS_SUCCESS:
      newState.repos = normalise(action.repos);
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
