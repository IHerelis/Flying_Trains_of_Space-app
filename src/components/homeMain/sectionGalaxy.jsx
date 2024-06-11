import React from 'react';
import { useSelector } from 'react-redux';


const SectionGalaxy = () => {
  
  const {dataPresent: galaxyFoto} = useSelector(state => state.galaxyFotos);
  console.log("SectionGalaxy",galaxyFoto);

  return (
    <section className='home-galaxy'>
      <div className='main__container'>
        <div className='galaxy-fotos'>
          <div className='galaxy-fotos-items'>
            <h2>
              Завдяки роботі науковців NASA, які діляться з нами отриманими з космосу матеріалами. Ми маємо змогу насолоджуватись безмежно прекрасними краєвидами всесвіту!
            </h2>
          </div>
          <div className='galaxy-fotos-board'>
            {
              galaxyFoto.map((item) => (
                <div key={item.title} className='galaxy-cart'>
                  <div className='galaxy-cart__foto'>
                    <img src={item.url} alt='foto of the day' />
                  </div>
                  <div className='galaxy-cart__body'>
                    <h3>{item.title}</h3>
                    <p>
                      {item.explanation.slice(0, 90)}...
                    </p>
                  </div>
                  <div className='cart__body__lowland'>
                    <button>More</button>
                    <div>{item.date}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>  
    </section>
  );
}

export default SectionGalaxy;
