import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='input-group'>
      <input type='text' className='form-control' placeholder='Search for Repo...' />
      <span className='input-group-btn'>
        <button className='btn btn-default' type='button'>
          <i className='fa fa-search' />
        </button>
      </span>
    </div>
  );
};

SearchBar.propTypes = {

};

export default SearchBar;
