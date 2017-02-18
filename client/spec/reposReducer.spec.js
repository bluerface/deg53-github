/* eslint-env mocha */
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import actions from '../redux/actions';
import reposReducer from '../redux/reducers/repos.reducer.js';

describe('repos reducer', function () {
  describe('FETCH_SEARCH_RESULTS_REQUEST', function () {
    it('should set the loading property and reset any error', function () {
      var state = reposReducer(undefined, {});
      state.error = 'Im an error';
      deepFreeze(state);
      var newState = reposReducer(state, actions.fetchSearchResultsRequest('bob'));
      expect(newState.query).to.equal('bob');
      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
    });
  });
  describe('FETCH_SEARCH_RESULTS_SUCCESS', function () {
    it('should set loading to false and set the data', function () {
      var state = reposReducer(undefined, actions.fetchSearchResultsRequest());
      deepFreeze(state);
      var newState = reposReducer(state, actions.fetchSearchResultsSuccess('I am some repo data'));
      expect(newState.loading).to.be.false;
      expect(newState.data).to.equal('I am some repo data');
    });
  });
  describe('FETCH_SEARCH_RESULTS_ERROR', function () {
    it('should set loading to false and set the error', function () {
      var state = reposReducer(undefined, actions.fetchSearchResultsRequest());
      deepFreeze(state);
      var newState = reposReducer(state, actions.fetchSearchResultsError('I am an error'));
      expect(newState.loading).to.be.false;
      expect(newState.error).to.equal('I am an error');
    });
  });
});
