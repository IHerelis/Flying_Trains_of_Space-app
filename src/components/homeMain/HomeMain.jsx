import React from 'react';
import './HomeMain.css';
import SectionTitular from './sectionTitular';
import SectionPresentation from './sectionPresentation';
import SectionGalaxy from './sectionGalaxy';

const HomeMain = () => {

  return (
    <div className='home-main__wrapper'>
      
      <SectionTitular />
    
      <SectionPresentation />

      <SectionGalaxy />

    </div>
  );
}

export default HomeMain;
