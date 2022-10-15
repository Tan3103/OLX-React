import React, { useContext } from 'react';
import Card from '../components/Card';
import { Context } from '../context';

export default function Home() {
  const {
    items,
    searchValue,
    setSearchValue,
    onSeachInput,
    isFavorites,
    onShowItem
  } = useContext(Context);
  return (
    <div className="home">
      <div className="search">
        <div className="search-block">
          <img src="img/search.svg" alt="Search" className='search-img'/>
          {searchValue && (
            <img
              className="clear"
              onClick={() => setSearchValue('')}
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onSeachInput}
            value={searchValue}
            placeholder="Поиск"
          />
        </div>
      </div>
        
      <h1 className='home-main-h1'>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все товары'}</h1>

      <div className='home-main'>
          <div className="card-all">
            {items
              .filter((filterItem) =>
                filterItem.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()),
              )
              .map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  isFavorite={isFavorites.includes(item.id) ? true : false}
                  onShowItem={onShowItem}
                />
              ))}
          </div>
      </div>
    </div>
  );
}