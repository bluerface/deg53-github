import React from 'react';
import {Link} from 'react-router';

import Chip from './Chip';
import '../styles/Header.scss';

var Header = ({value, icon}) => {
  return (
    <div className='media header'>
      <div className='media-left media-middle'>
        <Link to='/' className='link-plain link-no-hover'>
          <img className='media-object' src='/images/logo.jpg' alt='degree 53 logo' />
        </Link>
      </div>
      <div className='media-body media-middle'>
        <h2 className='media-heading'>
          Degree 53
        </h2>
        <p>
          <Chip value='Manchester' icon='map-marker' />
          <Chip value={
            <a className='link-plain' href='http://www.degree53.com' target='_blank'>
              http://www.degree53.com
            </a>
          } icon='link' />
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {

};

export default Header;
