import types from '../types';

var initialState = {
  data: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case types.FETCH_SEARCH_RESULTS_REQUEST:
      newState.loading = true;
      newState.error = null;
      break;

    case types.FETCH_SEARCH_RESULTS_SUCCESS:
      newState.loading = false;
      newState.data = action.repos;
      break;

    case types.FETCH_SEARCH_RESULTS_ERROR:
      newState.loading = false;
      newState.error = action.err;
      break;

    default:
      return state;
  }
  return newState;
}
