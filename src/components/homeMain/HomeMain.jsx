import React from 'react';
import './HomeMain.css';
import SectionTitular from './sectionTitular';
import SectionPresentation from './sectionPresentation';

const HomeMain = () => {

  return (
    <div className='home-main__wrapper'>
      
      <SectionTitular />
    
      <SectionPresentation />
      
      <section className='home-galaxy'>

      </section>
      
    </div>
  );
}

export default HomeMain;
