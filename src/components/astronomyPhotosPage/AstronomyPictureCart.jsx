import React, { useRef } from 'react';
import './AstronomyPictureCart.css';

const AstronomyPictureCart = ({item}) => {

  // const mediaType = item.media_type;
  const mediaType = useRef(item.media_type);
  const image = <img src={item.url} alt='photo of the day' />;
  const video = <iframe src={item.url} title="YouTube video player"></iframe>
  // const video = <iframe width="560" height="315" src={item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  // console.log(mediaType);
  


  return (
    <div className='galaxy-cart'>
      <div className='galaxy-cart__photo'>
        {mediaType.current === "video" ? video : image}
        {/* <img src={item.url} alt='photo of the day' /> */}
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
  );
}

export default AstronomyPictureCart;
