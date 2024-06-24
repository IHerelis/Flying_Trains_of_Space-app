import React from 'react';
import './Logo.css';
import { NavLink } from 'react-router-dom';
import imageLogo from '../../images/toy-train_logo.png';


const Logo = () => {

  return (
    <div className='header-logo__container'>
      <NavLink to="/">
        <div className='header-logo'>
          <h4>FTS</h4>
          <div className='header-logo__img'>
            <img src={imageLogo} />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;
