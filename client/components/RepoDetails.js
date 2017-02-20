import React from 'react';
import format from 'format-number';
import {connect} from 'react-redux';

import Chip from './Chip';
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
      <div>
        <div className='details'>
          <h3>
            <i className='fa fa-book pad-right' />
            <a href={repo.owner.html_url} target='_blank'>
              {repo.owner.login}
            </a>
             <span className='divider'>/</span>
            <strong>
              <a href={repo.html_url} target='_blank'>
                {repo.name}
                <sup>
                  <i className='fa fa-external-link' />
                </sup>
              </a>
            </strong>
          </h3>
          <p>
            <Chip value={repo.owner.login} icon='user' />
            <Chip value={repo.language} icon='circle' />
            <Chip value={'Open Issues: ' + format()(repo.open_issues)} icon='exclamation-circle' />
            <Chip value={'Forks: ' + format()(repo.forks)} icon='code-fork' />
            <Chip value={'Watchers: ' + format()(repo.watchers)} icon='star' />
          </p>
          <p className='description'>{repo.description}</p>
        </div>
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
