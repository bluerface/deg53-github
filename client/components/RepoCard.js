import React from 'react';
import {Link} from 'react-router';
import format from 'format-number';
import moment from 'moment';

import Chip from './Chip';
import '../styles/RepoCard.scss';

var RepoCard = ({repo}) => {
  return (
    <div className='repo-card'>
      <h3>
        <Link to={`/details/${repo.id}`}>
          {repo.full_name}
        </Link>
      </h3>
      <p>
        {repo.description}
      </p>
      <p style={{fontSize: '0.9em'}}>
        {repo.language &&
          <Chip value={repo.language} icon='circle' />
        }
        <Chip value={format()(repo.stargazers_count)} icon='star' />
        <Chip value={format()(repo.forks)} icon='code-fork' />
        <Chip value={`Updated ${moment(repo.updated_at).fromNow()}`} />
      </p>
    </div>
  );
};

RepoCard.propTypes = {
  repo: React.PropTypes.object.isRequired
};

export default RepoCard;
