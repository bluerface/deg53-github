import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import '../styles/Main.scss';

const App = (props) => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

App.propTypes = {};

export default App;
