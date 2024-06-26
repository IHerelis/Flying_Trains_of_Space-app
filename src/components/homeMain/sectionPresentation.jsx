import React from 'react';
import SliderPresentations from '../othersComponents/SliderPresentations';


import trainFoto1 from '../../images/TrevithicksEngine.jpg';
import trainFoto2 from '../../images/Locomotion_No._1..jpg';
import trainFoto3 from '../../images/train_class-A4s-Num_4468_Mallard_in_York.jpg';
import trainFoto4 from '../../images/trains_class-A4s_20080404_NYMR_040a.jpg';

import trainFoto5 from '../../images/Shinkansen_type_0_Hikari_19890506a.jpg';
import trainFoto6 from '../../images/Gare_de_Paris-Gare-de-Lyon_-_2018-05-15_-_IMG_7493.jpg';
import trainFoto7 from '../../images/tgv-train_2719564_1280.jpg';

const trainsListOld = [trainFoto1, trainFoto2, trainFoto3, trainFoto4];
const trainsListCurrent = [trainFoto5, trainFoto6, trainFoto7];




const SectionPresentation = () => {

  return (
    <section className='home-presentation'>
      <div className='main__container'>
        <div className='home-presentation__title'>
          <h2>
            Перші потяги були далеко від того, щоб літати, проте з часом змогли підкорити не лише великі відстані, а й піднятися на висоту, якої навіть не могли уявити їхні перші конструктори.
          </h2>
        </div>
        <div className='presentation-trains'>
          <div className='presentation-trains__item'>
            <p>
              Історія потужної та корисної техніки , бере свій початок від перших парових машин та простих механічних пристроїв! 
              Технічний прогрес не зупиняється ні намить. З'являються нові джерела енергії та наукові відкриття. Тому ми постійно бачимо нових фаворитів. Однак перші зразки винаходів приваблюють своєю грубою простотою і унікальними рисами. Це викликає інтерес як у досвідчених науковців, так і у новачків.
            </p>
          </div>
          <div className="presentation-trains__slider">
            <SliderPresentations presentationsList={trainsListOld} />
          </div>
        </div>
        <div className='presentation-trains'>
          <div className='presentation-trains__slider'>
            <SliderPresentations presentationsList={trainsListCurrent} />
          </div>
          <div className='presentation-trains__item'>
            <p>
              Сучасна техніка значно випереджає ту, з якої все починалося, демонструючи величезний прогрес у розвитку технологій. За кожним великим проривом ховаються маленькі, на перший погляд непомітні, але насправді значущі деталі. 
            </p>
          </div>
        </div>
        <div className='home-presentation__title'>
          <h2>
            Сучасні потяги все ще не вміють літати, але забезпечують швидкий і ефективний транспорт на землі, надійно з'єднуючи віддалені місця та забезпечуючи комфорт пасажирам. Проте можливо в майбутньому ми побачемо їх на інших планетах або навіть у космосі ...
          </h2>
        </div>
      </div>  
    </section>
  );
}

export default SectionPresentation;
