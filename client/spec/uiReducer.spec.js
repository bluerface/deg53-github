/* eslint-env mocha */
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import actions from '../redux/actions';
import {searchReducer} from '../redux/reducers/ui.reducer.js';

describe('search ui reducer', function () {
  describe('FETCH_SEARCH_RESULTS_REQUEST', function () {
    it('should set the loading and query properties and reset error and results', function () {
      var state = searchReducer(undefined, {});
      state.error = 'Im an error';
      deepFreeze(state);
      var newState = searchReducer(state, actions.fetchSearchResultsRequest('bob'));
      expect(newState.query).to.equal('bob');
      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.results).to.be.false;
    });
  });
  describe('FETCH_SEARCH_RESULTS_SUCCESS', function () {
    it('should set loading to false and results to true', function () {
      var state = searchReducer(undefined, actions.fetchSearchResultsRequest());
      deepFreeze(state);
      var newState = searchReducer(state, actions.fetchSearchResultsSuccess('I am some repo data'));
      expect(newState.loading).to.be.false;
      expect(newState.results).to.be.true;
    });
  });
  describe('FETCH_SEARCH_RESULTS_ERROR', function () {
    it('should set loading and results to false and set the error', function () {
      var state = searchReducer(undefined, actions.fetchSearchResultsRequest());
      deepFreeze(state);
      var newState = searchReducer(state, actions.fetchSearchResultsError('I am an error'));
      expect(newState.loading).to.be.false;
      expect(newState.results).to.be.false;
      expect(newState.error).to.equal('I am an error');
    });
  });
});
