import React, { useContext } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { Context } from '../context';

export default function Favorites() {
  const {items, isFavorites, onShowItem} = useContext(Context);
  return (
    <div className="home">
      <div className="favorite">
        <div className="favorite-h1">
          <h1>Мои закладки:</h1>
        </div>
        {isFavorites.length === 0 ? (
          <div className="no-favorites">
              <img
                src='img/smile-amaze.svg'
                alt='Удивлен'
                width={70} height={70}
                className='no-favorites-img'
              />

              <h2 className='no-favorites-h2'>Закладок нет :(</h2>

              <div className="no-favorites-div">Вы ничего не добавляли в закладки</div>

              <Link to="/">
                <button className="greenButton">Вернутся назад</button>
              </Link>
          </div>
        ) : (
          <div className="favorite-main">
            {items.map(
              (item) => isFavorites.includes(item.id) && (
                  <Card
                    key={item.id}
                    item={item}
                    isFavorite
                    onShowItem={onShowItem}
                  />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}