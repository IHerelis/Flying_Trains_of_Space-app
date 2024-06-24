import React from 'react';
import { useSelector } from 'react-redux';
import WatchMoreButton from '../othersComponents/WatchMoreButton';
import AstronomyPictureCart from '../astronomyPhotosPage/AstronomyPictureCart';


const SectionGalaxy = () => {
  
  const {dataPresent: photoTheDay} = useSelector(state => state.galaxyPhotos);
  console.log("SectionGalaxy",photoTheDay);

  return (
    <section className='home-galaxy'>
      <div className='main__container'>
        <div className='home-galaxy__title'>
          <h2>
            Значеня космосу в розвитку людини?
          </h2>
          <p>
            Людство здавна цікавиться космосом, і ця цікавість розвивалася разом з людським розумом та технологіями.
          </p>
        </div>
        <div className='galaxy-photos'>
          <div className='galaxy-photos-items'>
            <h3>
              Завдяки роботі науковців NASA, які діляться з нами отриманими з космосу матеріалами. Ми маємо змогу насолоджуватись безмежно прекрасними краєвидами всесвіту!
            </h3>
            {/* <p>
              Image of the universe today!
            </p> */}
            <div className='galaxy-photos__btn'>
              <WatchMoreButton link='/astronomyPhotos' />
            </div>
          </div>
          <div className='galaxy-photos-board'>
            { photoTheDay.length && <AstronomyPictureCart item={photoTheDay[0]} /> }
            {/* {
              photoTheDay.map((item) => (
                <AstronomyPictureCart item={item} key={0} />
              ))
            } */}
          </div>
        </div>
        
      </div>  
    </section>
  );
}

export default SectionGalaxy;
