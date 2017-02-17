import React from 'react';

var RepoCard = ({repo}) => {
  return (
    <div className='panel panel-default'>
      <div className='panel-body'>
        {repo.full_name}
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  repo: React.PropTypes.object.isRequired
};

export default RepoCard;
