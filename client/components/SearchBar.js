import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import actions from '../redux/actions';

var SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='input-group'>
        <Field
          name='searchQuery'
          component='input'
          type='text'
          placeholder='Search for Repo...'
          className='form-control'
           />
        <span className='input-group-btn'>
          <button
            className='btn btn-default'
            type='submit'
            disabled={props.pristine}>
            <i className='fa fa-search' />
          </button>
        </span>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit (values) {
    dispatch(actions.fetchSearchResults(values.searchQuery));
  }
});

SearchBar = reduxForm({form: 'search'})(SearchBar);

SearchBar = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar;
