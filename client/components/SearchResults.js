import React from 'react';
import {connect} from 'react-redux';
import RepoCard from './RepoCard';

var SearchResults = ({repos}) => {
  return (
    <div style={{paddingTop: '20px'}}>
      {!repos.data && !repos.loading && 'Search for a repo'}
      {repos.loading && 'Loading...'}
      {
        repos.data && repos.data.map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))
      }

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
