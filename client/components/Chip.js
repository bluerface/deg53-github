import React from 'react';
import '../styles/Chip.scss';

var Chip = ({value, icon}) => {
  return (
    <span className='chip'>
      {icon && <i className={`fa fa-${icon}`} /> }
      {value}
    </span>
  );
};

Chip.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ]).isRequired,
  icon: React.PropTypes.string
};

export default Chip;
