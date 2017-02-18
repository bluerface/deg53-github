import React from 'react';
import {connect} from 'react-redux';
import RepoCard from './RepoCard';

var SearchResults = ({repos}) => {
  return (
    <div style={{paddingTop: '20px'}}>
      {!repos.data && !repos.loading && 'Search for a repo'}
      {repos.loading && 'Loading...'}
      {repos.data && <h2>
        <i className='fa fa-search' style={{paddingRight: '10px', fontSize: '0.8em', verticalAlign: 'middle'}} />
        Search results for: {repos.query}
      </h2>}
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
