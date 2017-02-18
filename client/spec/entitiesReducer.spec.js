/* eslint-env mocha */
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import actions from '../redux/actions';
import entitiesReducer from '../redux/reducers/entities.reducer.js';

var data = [
  {
    id: 1,
    name: 'bill'
  },
  {
    id: 2,
    name: 'ben'
  }
];

describe('entities reducer', function () {
  describe('FETCH_SEARCH_RESULTS_SUCCESS', function () {
    it('adds the normalised data to the state', function () {
      var state = entitiesReducer(undefined, {});
      deepFreeze(state);

      var newState = entitiesReducer(state, actions.fetchSearchResultsSuccess(data));
      expect(newState.repos).to.eql({
        byId: {1: data[0], 2: data[1]},
        allIds: [1, 2]
      });
    });
  });
  describe('FETCH_SEARCH_RESULTS_REQUEST', function () {
    it('removes the existing repos', function () {
      var state = entitiesReducer(undefined, actions.fetchSearchResultsSuccess(data));
      deepFreeze(state);
      var newState = entitiesReducer(state, actions.fetchSearchResultsRequest('react'));
      expect(newState.repos).to.eql({
        byId: {},
        allIds: []
      });
    });
  });
});
