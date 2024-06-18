import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WatchMoreButton from '../othersComponents/WatchMoreButton';
import AstronomyPictureCart from '../astronomyPhotosPage/AstronomyPictureCart';


const SectionGalaxy = () => {
  
  const {dataPresent: galaxyPhoto} = useSelector(state => state.galaxyPhotos);
  console.log("SectionGalaxy",galaxyPhoto);

  return (
    <section className='home-galaxy'>
      <div className='main__container'>
        <div className='galaxy-photos'>
          <div className='galaxy-photos-items'>
            <h2>
              Завдяки роботі науковців NASA, які діляться з нами отриманими з космосу матеріалами. Ми маємо змогу насолоджуватись безмежно прекрасними краєвидами всесвіту!
            </h2>
            <div className='galaxy-photos__btn'>
              <WatchMoreButton link='/astronomyPhotos' />
            </div>
          </div>
          <div className='galaxy-photos-board'>
            { galaxyPhoto.length && <AstronomyPictureCart item={galaxyPhoto[0]} /> }
            {/* {
              galaxyPhoto.map((item) => (
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
