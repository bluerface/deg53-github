import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/actions';

const SearchBar = (props) => {
  return (
    <div className='input-group'>
      <input type='text' className='form-control' placeholder='Search for Repo...' />
      <span className='input-group-btn'>
        <button className='btn btn-default' type='button' onClick={props.search}>
          <i className='fa fa-search' />
        </button>
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  search: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  search () {
    dispatch(actions.fetchSearchResults('react'));
  }
});

export default connect(null, mapDispatchToProps)(SearchBar);
