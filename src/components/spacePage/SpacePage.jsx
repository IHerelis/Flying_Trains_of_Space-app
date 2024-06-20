import React from 'react';
import './SpacePage.css';
import { Outlet } from 'react-router-dom';


const SpacePage = () => {

  return (
    <div className='space-page-wrapper'>
      <Outlet />
    </div>
  );
}

export default SpacePage;
