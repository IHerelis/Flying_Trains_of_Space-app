import React from 'react';
import './HomeHeader.css';
import { NavLink } from 'react-router-dom';
import homeLogo from '../../images/toy-train_logo.png';

const HomeHeader = () => {

  return (
    <div className='home-header__container'>
      <NavLink to="/">
        <div className='header-logo'>
          <h4>FTS</h4>
          <div className='header-logo_img'>
            <img src={homeLogo} />
          </div>
        </div>
      </NavLink>
      <nav className='header-nav'>
        <NavLink to="/trains">Потяги</NavLink>
        <NavLink to="/space">Космос</NavLink>
        <NavLink to="/entertainment">Розваги</NavLink>
        {/* <NavLink to="/identification">Sing in/Sing up</NavLink> */}

      </nav>
      
    </div>
  );
}

export default HomeHeader;
