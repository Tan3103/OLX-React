import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Context } from './context';
import axios from 'axios';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Favorites from './pages/Favorites';
import InfoItem from './pages/InfoItem';
import NewItem from './pages/NewItem';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [showFullItem, setShowFullItem] = React.useState(false);
  const [fullItem, setFullItem] = React.useState();
  
  const localFavorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
  const [isFavorites, setIsFavorite] = React.useState(localFavorites);

  const [postTitle, setPostTitle] = React.useState('');
  const [postCategory, setPostCategory] = React.useState('');
  const [postDescription, setPostDescription] = React.useState('');
  const [postPhone, setPostPhone] = React.useState('');
  const [postPrice, setPostPrice] = React.useState('');
  const [postImg,  setPostImg] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse] = await Promise.all([
          axios.get('https://6342cf0c3f83935a784a1cb6.mockapi.io/items'),
        ]);

        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onFavorite = (arg) => {
    if (!arg.isFavorite) {
      let localFavorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

      const newFavorites = [arg.id];
      localFavorites = [...localFavorites, ...newFavorites];
      setIsFavorite(localFavorites);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    } else {
      let localFavorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

      localFavorites = localFavorites.filter((idx) => idx !== arg.id);
      setIsFavorite(localFavorites);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
  };

  const onSeachInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onShowItem = (items) => {
    setShowFullItem(!showFullItem);
    setFullItem(items);
  };

  const onDelete = () => {
    setPostTitle('');
    setPostCategory('');
    setPostDescription('');
    setPostPhone('');
    setPostPrice('');
    setPostImg('');
  };

  return (
    <Context.Provider
      value={{  
        items,
        searchValue,
        setSearchValue,
        onSeachInput,
        isFavorites,
        onFavorite,
        onShowItem,
        fullItem,
        postTitle,
        setPostTitle,
        postPrice,
        setPostPrice,
        postImg,
        setPostImg,
        setItems,
        postCategory,
        setPostCategory,
        postDescription,
        setPostDescription,
        postPhone,
        setPostPhone,
        onDelete
      }}
    >
      <div className="wrapper">
        <Header />

        <Route path="/" exact>
          <Home 
            onShowItem={onShowItem}
          />
        </Route>

        <Route path="/favorites">
          <Favorites
            items={items}
            isFavorites={isFavorites}
            onFavorite={onFavorite}
          />
        </Route>

        {showFullItem && <InfoItem fullItem = {fullItem} />}

        <Route path="/aboutUs" exact>
          <AboutUs />
        </Route>

        <Route path="/newItem" exact>
          <NewItem />
        </Route>

      </div>
    </Context.Provider>
  );
}

export default App;