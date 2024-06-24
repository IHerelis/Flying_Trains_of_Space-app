import React from 'react';
import './HomeHeader.css';
import { NavLink } from 'react-router-dom';
import Logo from '../othersComponents/Logo';

const HomeHeader = () => {

  return (
    <div className='home-header__container'>
      <div className='home-header__logo'>
        <Logo />
      </div>
      <nav className='header-nav'>
        <NavLink to="/trains">Потяги</NavLink>
        <NavLink to="/space">Космос</NavLink>
        <NavLink to="/entertainment">Розваги</NavLink>
        <div className='header-nav__login'>
          <button className='login-btn'>Log in</button>
        </div>
      </nav>
      
    </div>
  );
}

export default HomeHeader;
