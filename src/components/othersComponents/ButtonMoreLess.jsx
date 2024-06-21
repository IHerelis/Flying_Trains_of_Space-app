import React, { useState } from 'react';


const ButtonMoreLess = ({active, className}) => {

  const [isActive, setIsActive] = useState(active);

  
  return (
    <>
      <button type='button' 
        className={className} 
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? "More" : "Less"}
      </button>
    </>
  );
}

export default ButtonMoreLess;
