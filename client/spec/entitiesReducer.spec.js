/* eslint-env mocha */
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import actions from '../redux/actions';
import {reposReducer, readmesReducer} from '../redux/reducers/entities.reducer.js';

describe('entities reducer', function () {
  describe('repos reducer', function () {
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
    describe('FETCH_SEARCH_RESULTS_SUCCESS', function () {
      it('adds the normalised data to the state', function () {
        var state = reposReducer(undefined, {});
        deepFreeze(state);

        var newState = reposReducer(state, actions.fetchSearchResultsSuccess(data));
        expect(newState).to.eql({
          byId: {1: data[0], 2: data[1]},
          allIds: [1, 2]
        });
      });
    });
    describe('FETCH_SEARCH_RESULTS_REQUEST', function () {
      it('removes the existing repos', function () {
        var state = reposReducer(undefined, actions.fetchSearchResultsSuccess(data));
        deepFreeze(state);
        var newState = reposReducer(state, actions.fetchSearchResultsRequest('react'));
        expect(newState).to.eql({
          byId: {},
          allIds: []
        });
      });
    });
  });
  describe('readmes reducer', function () {
    describe('FETCH_README_SUCCESS', function () {
      it('adds the readme to byId and allIds', function () {
        var readme = 'I am some html/markup';
        var state = readmesReducer(undefined, {});
        deepFreeze(state);
        var newState = readmesReducer(state, actions.fetchReadmeSuccess(1, readme));
        expect(newState).to.eql({
          byId: {1: readme},
          allIds: [1]
        });
      });
      it('keeps existing readmes', function () {
        var readme = 'I am some html/markup';
        var state = readmesReducer(undefined, actions.fetchReadmeSuccess(1, readme));
        deepFreeze(state);
        var newState = readmesReducer(state, actions.fetchReadmeSuccess(2, readme));
        expect(newState).to.eql({
          byId: {1: readme, 2: readme},
          allIds: [1, 2]
        });
      });
    });
    describe('FETCH_SEARCH_RESULTS_REQUEST', function () {
      it('deletes all cached readmes when a new search is fired', function () {
        var readme = 'I am some html/markup';
        var state = readmesReducer(undefined, actions.fetchReadmeSuccess(1, readme));
        deepFreeze(state);
        var newState = readmesReducer(state, actions.fetchSearchResultsRequest());
        expect(newState).to.eql({
          byId: {},
          allIds: []
        });
      });
    });
  });
});
