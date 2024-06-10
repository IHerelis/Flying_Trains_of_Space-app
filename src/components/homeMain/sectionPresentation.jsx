import React from 'react';
import { Carousel } from 'antd';


import trainFoto1 from '../../images/Blenkinsops_rack_locomotive,_1812_(British_Railway_Locomotives_1803-1853).jpg';
import trainFoto2 from '../../images/TrevithicksEngine.jpg';
import trainFoto3 from '../../images/Locomotion_No._1..jpg';
import trainFoto4 from '../../images/Shinkansen_type_0_Hikari_19890506a.jpg';
import trainFoto5 from '../../images/Gare_de_Paris-Gare-de-Lyon_-_2018-05-15_-_IMG_7493.jpg';


const SectionPresentation = () => {

  return (
    <div className='home-presentation'>
      <div className='main__container'>
        <div className='presentation-trains'>
          <div className='presentation-trains__item'>
            <h2>
              Історія потужної та корисної техніки , бере свій початок від перших парових машин! 
              Технічний прогрес не зупиняється ні намить. З'являються нові джерела енергії та наукові відкриття. Тому ми постійно бачимо нових фаворитів.
            </h2>
          </div>
          <div className="presentation-trains__slider">
            <Carousel autoplay autoplaySpeed={5000} effect="fade">
              <div>
                <h3 className='trains__slider__img'>
                  <img src={trainFoto1} alt='train' />
                </h3>
              </div>
              <div>
                <h3 className='trains__slider__img'>
                  <img src={trainFoto2} alt='train' />
                </h3>
              </div>
              <div>
                <h3 className='trains__slider__img'>
                  <img src={trainFoto3} alt='train' />
                </h3>
              </div>
              <div>
                <h3 className='trains__slider__img'>
                  <img src={trainFoto4} alt='train' />
                </h3>
              </div>
              <div>
                <h3 className='trains__slider__img'>
                  <img src={trainFoto5} alt='train' />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SectionPresentation;
