import React, { useEffect } from 'react';
import '../StyleNull.css';
import './HomeBlock.css';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../homeHeader/HomeHeader';
import HomeFooter from '../homeFooter/HomeFooter';
import { useDispatch } from 'react-redux';
import { oneGalaxyPhoto } from '../../thunks/galaxyPhotosThunks';


const HomeBlock = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneGalaxyPhoto());
  }, []);


  return (
    <div className='home-block-wrapper'>
      <header>
        <HomeHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <HomeFooter />
      </footer>
    </div>
  );
}

export default HomeBlock;
