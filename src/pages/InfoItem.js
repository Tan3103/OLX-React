import React, { useContext } from 'react';
import { Context } from '../context';

export default function InfoItem() {
  const {fullItem, onShowItem} = useContext(Context);
  let { price, title, description, category, phone, imageUrl } = fullItem.item;

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
  );

  return (
    <div className='full-item'>
      <div>
        <img className='full-item-img' src={imageUrl} alt="Кроссовка" onClick={() => onShowItem({fullItem})}/>

        <div className='full-item-main'>
          <h1>{title}</h1>

          <ColoredLine color="black"/>

          <div className='full-description'>
            <span>Описание:</span>
            <p>{description}</p>
          </div>

          <div className='full-category'>
            <span className='full-span'>Категория:</span>
            <p className='full-p'>{category}</p>
          </div>

          <div className='full-category'>
            <span className='full-span'>Номер телефона:</span>
            <p className='full-p'>{phone}</p>
          </div>

          <div className="full-item-price">
              <span>ЦЕНА:</span>
              <p className='full-item-tg'>{price}тг.</p>
          </div>

          <img
              className="full-item-clear"
              onClick={() => onShowItem('')}
              src="img/btn-remove.svg"
              alt="Clear"
            />
        </div>
      </div>
    </div>
  );
}