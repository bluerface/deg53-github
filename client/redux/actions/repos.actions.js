import types from '../types';
import axios from 'axios';

let actions = {};

actions.fetchSearchResults = () => {
  return (dispatch) => {
    dispatch(actions.fetchSearchResultsRequest());
    return axios
      .get('https://api.github.com/search/repositories?q=react+in:name&sort=stars&order=desc')
      .then(res => {
        dispatch(actions.fetchSearchResultsSuccess(res.data.items));
      })
      .catch(err => {
        dispatch(actions.fetchSearchResultsError(err));
      });
  };
};

actions.fetchSearchResultsRequest = () =>
  ({ type: types.FETCH_SEARCH_RESULTS_REQUEST });

actions.fetchSearchResultsSuccess = (repos) =>
  ({ type: types.FETCH_SEARCH_RESULTS_SUCCESS, repos });

actions.fetchSearchResultsError = (err) =>
  ({ type: types.FETCH_SEARCH_RESULTS_ERROR, err });

export default actions;
