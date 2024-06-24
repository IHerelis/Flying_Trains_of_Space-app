import React, { useState } from 'react';
import './ButtonMoreLess.css';


const ButtonMoreLess = ({active}) => {

  const [isActive, setIsActive] = useState(active);

  
  return (
    <>
      <button type='button' 
        className='more-less-btn' 
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? "More" : "Less"}
      </button>
    </>
  );
}

export default ButtonMoreLess;
