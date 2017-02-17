import React from 'react';
import {connect} from 'react-redux';

var SearchResults = (props) => {
  console.log(props.repos);
  return (
    <div style={{paddingTop: '20px'}}>
      {props.repos.data ? '' : 'Search for a repo'}
    </div>
  );
};

SearchResults.propTypes = {
  repos: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.repos
});

SearchResults = connect(mapStateToProps)(SearchResults);

export default SearchResults;
