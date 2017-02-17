import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/actions/repos.actions.js';

var SearchResults = (props) => {
  console.log(props.repos);
  return (
    <div style={{paddingTop: '20px'}}>
      {props.repos.data ? '' : 'Search for a repo'}
    </div>
  );
};

SearchResults.propTypes = {
  repos: React.PropTypes.object.isRequired,
  test: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => ({
  test () {
    dispatch(actions.placeholder());
  }
});

SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults);

export default SearchResults;
