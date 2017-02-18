import types from '../types';
import axios from 'axios';

var request = axios.create({
  baseURL: 'https://api.github.com',
  headers: {Accept: 'application/vnd.github.v3+json'}
});

let actions = {};

// ---------- fetch search results --------------------

actions.fetchSearchResults = (query) => {
  return (dispatch) => {
    dispatch(actions.fetchSearchResultsRequest(query));
    return request
      .get(`/search/repositories?q=${query}+in:name&sort=stars&order=desc`)
      .then(res => {
        dispatch(actions.fetchSearchResultsSuccess(res.data.items));
      })
      .catch(err => {
        dispatch(actions.fetchSearchResultsError(err));
      });
  };
};

actions.fetchSearchResultsRequest = (query) =>
  ({ type: types.FETCH_SEARCH_RESULTS_REQUEST, query });

actions.fetchSearchResultsSuccess = (repos) =>
  ({ type: types.FETCH_SEARCH_RESULTS_SUCCESS, repos });

actions.fetchSearchResultsError = (err) =>
  ({ type: types.FETCH_SEARCH_RESULTS_ERROR, err });

// ---------- fetch repo detail --------------------

// actions.fetchRepoDetail = (fullname) => {
//   return (dispatch) => {
//     dispatch(actions.fetchRepoDetailRequest());
//     return request
//       .get(`/repos/${fullname}`)
//       .then(res => {
//         dispatch(actions.fetchRepoDetailSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(actions.fetchRepoDetailError(err));
//       });
//   };
// };
//
// actions.fetchRepoDetailRequest = () =>
//   ({ type: types.FETCH_REPO_DETAIL_REQUEST });
//
// actions.fetchRepoDetailSuccess = (repo) =>
//   ({ type: types.FETCH_REPO_DETAIL_SUCCESS, repo });
//
// actions.fetchRepoDetailError = (err) =>
//   ({ type: types.FETCH_REPO_DETAIL_ERROR, err });

// ---------- fetch readme --------------------

actions.fetchReadme = (fullname, id) => {
  return (dispatch) => {
    dispatch(actions.fetchReadmeRequest(id));
    return request
      .get(`/repos/${fullname}/readme`, {
        headers: {Accept: 'application/vnd.github.VERSION.html'}
      })
      .then(res => {
        dispatch(actions.fetchReadmeSuccess(id, res.data));
      })
      .catch(err => {
        dispatch(actions.fetchReadmeError(err));
      });
  };
};

actions.fetchReadmeRequest = (id) =>
  ({ type: types.FETCH_README_REQUEST, id });

actions.fetchReadmeSuccess = (id, readme) =>
  ({ type: types.FETCH_README_SUCCESS, id, readme });

actions.fetchReadmeError = (err) =>
  ({ type: types.FETCH_README_ERROR, err });

export default actions;
