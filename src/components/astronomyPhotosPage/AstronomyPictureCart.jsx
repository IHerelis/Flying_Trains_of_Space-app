import React, { useRef, useState } from 'react';
import './AstronomyPictureCart.css';
import ButtonMoreLess from '../othersComponents/ButtonMoreLess';


const AstronomyPictureCart = ({item}) => {

  const [moreActive, setMoreActive] = useState(false);

  const mediaType = useRef(item.media_type);

  const showMoreItems = () => {
    setMoreActive(!moreActive);
  }


  const image = <img src={item.url} alt='photo of the day' />;
  const video = <iframe src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  

  return (
    <div className='galaxy-cart'>
      <div className='galaxy-cart__photo'>
        {mediaType.current === "video" ? video : image}
      </div>
      <div className='cart__body__items'>
        <h3>{item.title}</h3>
        <p>
          { !moreActive ? item.explanation.slice(0, 90)+"..." : item.explanation }
        </p>
      </div>
      <div className='cart__body__lowland'>
        <div className='body__lowland__btn' onClick={showMoreItems}>
          <ButtonMoreLess active={moreActive} />
        </div>
        <div>{item.date}</div>
      </div>
    </div>
  );
}

export default AstronomyPictureCart;
