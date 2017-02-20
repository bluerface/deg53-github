import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SearchPage = (props) => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

SearchPage.propTypes = {
};

export default SearchPage;
