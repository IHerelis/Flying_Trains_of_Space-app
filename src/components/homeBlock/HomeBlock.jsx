import React from 'react';
import '../StyleNull.css';
import './HomeBlock.css';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../homeHeader/HomeHeader';

const HomeBlock = () => {

  return (
    <div className='home-block-wrapper'>
      <header>
        <HomeHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default HomeBlock;
