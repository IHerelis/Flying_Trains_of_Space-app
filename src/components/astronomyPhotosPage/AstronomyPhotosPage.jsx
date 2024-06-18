import React from 'react';
import './AstronomyPhotosPage.css';
import RangeDateForm from './RangeDateForm';
import { useDispatch, useSelector } from 'react-redux';
import AstronomyPictureCart from './AstronomyPictureCart';
import { removeGalaxyDataList } from '../../slices/galaxyPhotosSlice';

const AstronomyPhotosPage = () => {
  const {dataList: photosList} = useSelector(state => state.galaxyPhotos);
  const dispatch = useDispatch();

  return (
    <div className='astronomy-photos-wrapper'>
      <div className='main__container'>
        <div className='astronomy-photos--block'>
          <div className='astronomy-photos__board'>
            {
              photosList.map((item, index)=> (
                <div className='photos__board__cart' key={index}>
                  <AstronomyPictureCart item={item} />
                </div>
              ))
            }
          </div>
          <div className='astronomy-photos__management'>
            <RangeDateForm />
            <div>
              <button type='button' className='clean__board__btn'
                onClick={ () => dispatch(removeGalaxyDataList()) }
              >Clear the Board</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstronomyPhotosPage;
