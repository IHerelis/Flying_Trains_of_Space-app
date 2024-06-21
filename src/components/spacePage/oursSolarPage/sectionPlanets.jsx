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
        <div className='ours-planets__title'>
          <h2>
            Сонячна система.
          </h2>
        </div>
        <div className='planet-board star-sun'>
          <div className='planet-board__image'>
            <img src={ourSunImage} alt='star' />
          </div>
          <div className='planet-board__items'>
            <h3>Сонце ( Sun )</h3>
            <p>
              Сонце — це жовтий карлик, головна зірка нашої системи, навколо якої обертаються всі інші об'єкти. Воно становить понад 99% маси всієї Сонячної системи.
            </p>
          </div>
        </div>
        <div className='ours-planets__subtitle'>
          <h2>
            Група внутрішніх планет :
          </h2>
        </div>
        <div className='planet-block'>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={MercuryImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Меркурій ( Mercury )</h3>
              <p>
                Найближча до Сонця і найменша планета. Не має атмосфери і великих супутників.
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
                Друга планета від Сонця, має густу атмосферу, яка складається переважно з вуглекислого газу, і найспекотніша планета нашої сонячної системи.
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
                Третя планета від Сонця, єдина відома планета, на якій існує життя. Має один супутник — Місяць.
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
                Планета відома своїм червоним кольором через велику кількість оксиду заліза на поверхні. Має два невеликих супутники — Фобос і Деймос.
              </p>
            </div>
          </div>
        </div>
        <div className='ours-planets__subtitle'>
          <h2>
            Група зовнішніх планет :
          </h2>
        </div>
        <div className='planet-block'>
          <div className='planet-board planet'>
            <div className='planet-board__image'>
              <img src={JupiterImage} alt='planet' />
            </div>
            <div className='planet-board__items'>
              <h3>Юпітер ( Jupiter )</h3>
              <p>
                Найбільша планета Сонячної системи, п'ята від Сонця. Має більше 79 супутників, найбільші з яких — Ганімед, Каллісто, Іо та Європа.
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
                Шоста планета, відома своїми яскравими кільцями. Має більше 82 супутників, найбільший з яких — Титан.
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
                Сьома планета від сонця, має унікальний нахил осі обертання. Має кільця і 27 відомих супутників.
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
                Найдальша від Сонця планета. Має 14 відомих супутників, найбільший з яких — Тритон.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPlanets;
