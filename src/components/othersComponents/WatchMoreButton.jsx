import React from 'react';
import './WatchMoreButton.css';
import { Link } from 'react-router-dom';

const WatchMoreButton = ({link}) => {

  return (
    <div className='watch-more-btn'>
      <Link to={link}>
        <h3>Watch More</h3>
      </Link>
    </div>
  );
}

export default WatchMoreButton;
