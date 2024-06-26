import React from 'react';

const SectionSolarSystemPresentation = () => {


  return (
    <section className='solar-system'>
      <div className='main__container'>
        <div className='solar-system__items'>
          <h3>
            Відомо багато фактів про космос та зокрема про нашу сонячну систему.
          </h3>
          <div className='system__items__fact'>
            <h4>Планети</h4>
            <p>
              Сонячна система включає вісім планет, які поділяються на внутрішні (земної групи) і зовнішні (газові гіганти):
            </p>
          </div>
          <div className='system__items__fact'>
            <h4>Карликові планети</h4>
            <p>
              Крім основних планет, у Сонячній системі є карликові планети, такі як Плутон, Ерида, Хаумеа, Макемаке і Церера.
            </p>
          </div>
          <div className='system__items__fact'>
            <h4>Малі тіла Сонячної системи</h4>
            <p>
              До цієї категорії належать астероїди, комети та інші невеликі об'єкти:
            </p>
            <ul>
              <li><span>Астероїди</span> — більшість з них знаходяться в поясі астероїдів між Марсом і Юпітером.</li>
              <li><span>Комети</span> — льодяні тіла, які при наближенні до Сонця утворюють хвіст із газу та пилу.</li>
              <li><span>Метеороіди</span> — невеликі частинки, які можуть входити в атмосферу Землі, де вони згоряють і стають метеорами (падаючими зірками).</li>
            </ul>
          </div>
          <div className='system__items__fact'>
            <h4>Пояс Койпера та хмара Оорта</h4>
            <p>
              За орбітою Нептуна знаходиться пояс Койпера, де розташовані багато малих тіл, зокрема карликові планети. Ще далі, на околиці Сонячної системи, знаходиться гіпотетична хмара Оорта, яка може бути джерелом довгоперіодичних комет.
            </p>
          </div>
          <div className='system__items__fact'>
            <h4>Геліосфера</h4>
            <p>
              Геліосфера — це область впливу сонячного вітру, що простягається далеко за орбіту Плутона і визначає межі між сонячною плазмою та міжзоряним середовищем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSolarSystemPresentation;
