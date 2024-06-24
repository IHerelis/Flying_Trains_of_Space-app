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
              Сонце — це головна зірка нашої системи, навколо якої обертаються всі інші об'єкти. Воно є зіркою головної послідовності G-типу (G2V). Отож його неофіційно, і не зовсім точно, називають жовтим карликом (його світло насправді біле).
            </p>
            <div>
              <ul>
                <li>Сонце становить понад 99% маси всієї Сонячної системи.</li>
                <li>Його вік близько 4,6 мільярда років і перебуває приблизно на половині свого життєвого циклу.</li>
                <li>Діаметр Сонця приблизно 1,4 мільйона кілометрів, що в 109 разів більше за діаметр Землі.</li>
                <li>Енергія, яку випромінює Сонце, виникає внаслідок термоядерного синтезу.</li>
                <li>Кожну секунду Сонце випромінює приблизно 3.8 x 10²⁶ ват енергії.</li>
                <li>Сонце є джерелом енергії для життя на Землі, воно забезпечує необхідне світло і тепло, що підтримує клімат і біологічні процеси.</li>
              </ul>
            </div>
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
              <p>
                Близько 75% діаметра Меркурія складає його металеве ядро, яке переважно складається з заліза. Це робить Меркурій найщільнішою планетою в Сонячній системі після Землі.
              </p>
              <p>
                Температура на поверхні Меркурія коливається від -173°C вночі до 427°C вдень. Такі екстремальні зміни зумовлені відсутністю атмосфери, яка б зберігала тепло.
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
                Друга планета від Сонця, має густу атмосферу, яка складається на 96.5% з вуглекислого газу, з невеликою кількістю азоту та слідами інших газів.
              </p>
              <p>
                Венера є найгарячішою планетою в Сонячній системі з середньою температурою на поверхні близько 465°C.
              </p>
              <p>
                Вона майже не має магнітного поля, що є однією з головних загадок цієї планети, враховуючи її розмір і склад.
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
                Третя планета від Сонця, розташована на відстані близько 149.6 мільйонів кілометрів (1 астрономічна одиниця).
              </p>
              <p>
                Земля складається з трьох основних шарів: кора, мантія та ядро. Ядро, у свою чергу, складається з зовнішнього (рідкого) та внутрішнього (твердого) ядра.
              </p>
              <p>
                Атмосфера Землі складається з 78% азоту, 21% кисню і 1% інших газів, таких як аргон, вуглекислий газ та інші.
              </p>
              <p>
                Земля має один природний супутник — Місяць. Місяць значно впливає на припливи і відпливи океанів.
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
                Планета відома своїм червоним кольором через велику кількість оксиду заліза на поверхні.
              </p>
              <p>
                Атмосфера Марса дуже тонка і складається переважно з вуглекислого газу (близько 95%), з невеликою кількістю азоту (2.7%) і аргону (1.6%).
              </p>
              <p>
                На Марсі є найбільший вулкан у Сонячній системі — Олімп (висота близько 22 км) і найбільший каньйон — Долина Маринер (довжина понад 4,000 км).
              </p>
              <p>
                Марс має два невеликі природні супутники — Фобос і Деймос.
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
                Найбільша планета Сонячної системи, п'ята від Сонця. Має більше 79 супутників, найбільші з них — Ганімед, Каллісто, Іо та Європа. Ганімед є найбільшим супутником у Сонячній системі, навіть більшим за планету Меркурій.
              </p>
              <p>
                Температура верхніх шарів атмосфери Юпітера становить приблизно -145°C. У центрі планети температура може досягати близько 24,000°C.
              </p>
              <p>
                Атмосфера Юпітера складається переважно з водню (близько 90%) і гелію (близько 10%), з невеликими кількостями метану, аміаку, водяної пари і інших сполук.
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
                Шоста планета, відома своїми величезними і складними кільцями, які складаються переважно з крижаних частинок з домішками пилу і каменів.
              </p>
              <p>
                Найбільші супутники Сатурна: Титан, Рея, Діона, Енцелад, Мімас, Тефія. Титан — є другим за розміром супутником у Сонячній системі і єдиним супутником з густою атмосферою.
              </p>
              <p>
                Сатурн обертається навколо своєї осі дуже швидко — один день на Сатурні триває приблизно 10.7 земних годин.
              </p>
              <p>
                Середня температура верхніх шарів атмосфери Сатурна становить приблизно -178°C. 
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
                Сьома планета від сонця, і є найхолоднішою планетою Сонячної системи, з мінімальною температурою близько -224°C. Середня температура верхніх шарів атмосфери становить приблизно -195°C.
              </p>
              <p>
                Має близько 30 відомих супутників. Найбільші з них — Титанія, Оберон, Умбріель, Аріель і Міранда.
              </p>
              <p>
                Уран має унікальний нахил осі обертання, який становить близько 98 градусів.
              </p>
              <p>
              Також Він має цілу систему вузьких напівпрозорих газопилових кілець.
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
                Найдальша від Сонця планета, з середньою температурою верхніх шарів атмосфери близько -214°C.
              </p>
              <p>
                Атмосфера Нептуна складається переважно з водню (близько 80%), гелію (близько 19%) і метану (1.5%). Метан поглинає червоне світло і відбиває синє, що надає планеті її характерного блакитного кольору.
              </p>
              <p>
                Нептун має 14 відомих супутників. Найбільший з них — Тритон — є сьомим за розміром супутником у Сонячній системі і єдиним великим супутником з ретроградною орбітою (рухається у зворотному напрямку від обертання планети).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPlanets;
