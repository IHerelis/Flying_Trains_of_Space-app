import React from 'react';
import './OursSolarPage.css';
import SectionHeader from './sectionHeader';
import SectionPlanets from './sectionPlanets';
import SectionSolarSystemPresentation from './sectionSolarSystemPresentation';



const OursSolarPage = () => {


  return (
    <div className='ours-solar-wrapper'>
      <SectionHeader />
      <SectionSolarSystemPresentation />
      <SectionPlanets />
    </div>
  );
}

export default OursSolarPage;
