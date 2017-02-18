import React from 'react';
import {connect} from 'react-redux';
import {getReposArray} from '../redux/reducers';
import RepoCard from './RepoCard';

var SearchResults = ({ui, repos}) => {
  return (
    <div style={{paddingTop: '20px'}}>
      {!ui.results && !ui.loading && 'Search for a repo'}
      {ui.loading && 'Loading...'}
      {ui.results && <h2>
        <i className='fa fa-search' style={{paddingRight: '10px', fontSize: '0.8em', verticalAlign: 'middle'}} />
        Search results for: {ui.query}
      </h2>}
      {
        ui.results && repos.map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))
      }

    </div>
  );
};

SearchResults.propTypes = {
  repos: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  ui: state.ui.search,
  repos: getReposArray(state)
});

SearchResults = connect(mapStateToProps)(SearchResults);

export default SearchResults;
