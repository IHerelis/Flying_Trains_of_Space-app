import React from 'react';

import ourSunImage from '../../../images/OurSolarSystem/Sun_pexels-pixabay-87611.jpg';
import MercuryImage from '../../../images/OurSolarSystem/Mercury_in_true_color.jpg';
import VenusImage from '../../../images/OurSolarSystem/Venus_from_Mariner_10.jpg';
import EarthImage from '../../../images/OurSolarSystem/Earth_pexels-pixabay-87651.jpg';
import MarsImage from '../../../images/OurSolarSystem/Mars_Hubble.jpg';
import JupiterImage from '../../../images/OurSolarSystem/Jupiter_and_its_shrunken_Great_Red_Spot.jpg';
import SaturnImage from '../../../images/OurSolarSystem/Saturn_in_natural_colors_(captured_by_the_Hubble_Space_Telescope).jpg';
import UranusImage from '../../../images/OurSolarSystem/Uranus_Voyager2_color_calibrated.png';
import NeptuneImage from '../../../images/OurSolarSystem/Neptune_Voyager2_color_calibrated.png';



const SectionPlanets = () => {


  return (
    <section className='ours-planets'>
      <div className='main__container'>
        <div className='planet-board star-sun'>
          <div className='planet-board__image'>
            <img src={ourSunImage} alt='star' />
          </div>
          <div className='planet-board__items'>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
            </p>
          </div>
        </div>
        <h2>
          Група внутрішніх планет :
        </h2>
        <div className='planet-block'>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={MercuryImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Меркурій ( Mercury )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={VenusImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Венера ( Venus )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={EarthImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Зелмя ( Earth )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={MarsImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Марс ( Mars )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
        </div>
        <h2>
          Група зовнішніх планет :
        </h2>
        <div className='planet-block'>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={JupiterImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Юпітер ( Jupiter )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={SaturnImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Сатурн ( Saturn )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={UranusImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Уран ( Uranus )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={NeptuneImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Нептун ( Neptune )</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia, eius ad assumenda reprehenderit labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPlanets;
