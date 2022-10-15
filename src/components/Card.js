import React, { useContext } from 'react';
import { Context } from '../context';

export default function Card({ item, isFavorite, onShowItem}) {
  const {onFavorite} = useContext(Context);
  let { id, price, title, imageUrl } = item;
  
  return (
    <div id={id} className='card'>
      <img className='card-img' src={imageUrl || "img/item/NoImage.jpg"} alt="img/item/1.jpg" onClick={() => onShowItem({item})}/>

      <h5>{title}</h5>

      <div className='card-main'>
        <div className="card-price">
            <span>ЦЕНА:</span>
            <p className='card-tg'>{price}тг.</p>
        </div>
        <div>
          <div className='card-favorite' onClick={() => onFavorite({ id, title, imageUrl, isFavorite })}>
            <img
              className='card-favorite-btn'
              src={isFavorite ? 'img/likeyes.png' : 'img/like-no.svg'}
              alt="Unliked"
            />
          </div>
        </div>
      </div>
    </div>
  );
}