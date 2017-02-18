import React from 'react';
// import '../styles/RepoDetails.scss';

var RepoDetails = (props) => {
  return (
    <div className='repo-card'>
      Details for {props.params.id}
    </div>
  );
};

RepoDetails.propTypes = {
};

export default RepoDetails;
