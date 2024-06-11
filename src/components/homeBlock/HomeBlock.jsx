import React, { useEffect } from 'react';
import '../StyleNull.css';
import './HomeBlock.css';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../homeHeader/HomeHeader';
import { useDispatch } from 'react-redux';
import { oneGalaxyFoto } from '../../thunks/galaxyFotosThunks';

const HomeBlock = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneGalaxyFoto());
  }, []);


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
