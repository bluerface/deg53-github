import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/actions';
import '../styles/RepoDetails.scss';

class RepoDetails extends React.Component {
  componentWillMount () {
    var id = this.props.params.id;
    var fullname = this.props.repo.full_name;
    this.props.getReadme(fullname, id);
  }
  render () {
    var {repo, readme, ui} = this.props;
    return (
      <div className=''>
        <h3>{repo.full_name}</h3>
        {ui.loading && 'Loading...'}
        {ui.results &&
          <div className='readme'>
            <h3>
              <i className='fa fa-book' style={{paddingRight: '0.5em'}} />
              Readme.md
            </h3>
            <div dangerouslySetInnerHTML={{__html: readme}} />
          </div>
        }
      </div>
    );
  }
}

RepoDetails.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  repo: state.entities.repos.byId[ownProps.params.id],
  readme: state.entities.readmes.byId[ownProps.params.id],
  ui: state.ui.readme
});

const mapDispatchToProps = (dispatch) => ({
  getReadme (fullname, id) {
    dispatch(actions.fetchReadme(fullname, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails);
