import React, { useRef } from 'react';
import './GamesPage.css';


const GamesPage = () => {

  const rocketHero = useRef();

  const rocketHeroControl = (e) => {
    if (e.pageX < 45) {
      rocketHero.current.setAttribute('style', `top: ${e.pageY-45}px; left: 0px;`);
    } else if (e.pageY < 45) {
        rocketHero.current.setAttribute('style', `top: 0px; left: ${e.pageX-45}px;`);
      } else {
          rocketHero.current.setAttribute('style', `top: ${e.pageY-45}px; left: ${e.pageX-45}px;`);
        }
  }


  return (
    <div className='games-page-wrapper'>
      <div className='games-page__header' onMouseMove={(e) => rocketHeroControl(e)}>
        <div className="obj-Hero" ref={rocketHero}></div>
        
      </div>  
    </div>
  );
}

export default GamesPage;
