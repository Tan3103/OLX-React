import React, { useContext } from 'react';
import axios from 'axios';
import { Context } from '../context';

export default function NewItem() {
  const { postTitle,
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
    onDelete} = useContext(Context);

  return (
    <div className='new'>
        <div className='new-main'>
            <h1>Создать объявление</h1>

            <div className='new-div'>
                <h3>Опишите в подробностях</h3>

                <label>Укажите название*</label>
                <input placeholder='Например, iPhone14' className='new-title' value={postTitle} onChange={e => setPostTitle(e.target.value)}/>

                <label>Категория*</label>
                <select placeholder='Выберите категорию' className='new-category' value={postCategory} onChange={e => setPostCategory(e.target.value)}>
                    <option value="Недвижимость">Недвижимость</option>
                    <option value="Электроника">Электроника</option>
                    <option value="Транспорт">Транспорт</option>
                    <option value="Хобби, отдых и спорт">Хобби, отдых и спорт</option>
                    <option value="Животные">Животные</option>
                    <option value="Детский мир">Детский мир</option>
                    <option value="Мода и стиль">Мода и стиль</option>
                </select>
            </div>

            <div className='new-div'>
                <h3>Фото</h3>

                <label>Это фото будет на обложке объявления.</label>
                <input type='file'  placeholder='Добавить фото' className='new-img' value={postImg} onChange={e => setPostImg(e.target.value)}/>
            </div>

            <div className='new-div'>
                <h3>Описание</h3>

                <label>Описание*</label>
                <textarea className='new-description' placeholder='Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание' value={postDescription} onChange={e => setPostDescription(e.target.value)}/>
            </div>

            <div className='new-div'>
                <h3>Стоимость</h3>

                <label>Цена*</label>
                <div className='new-price'>
                    <input className='new-phone' placeholder='Цена' value={postPhone} onChange={e => setPostPhone(e.target.value)}/>
                    <p className='new-tg'>тг.</p>
                </div>
            </div>

            <div className='new-div'>
                <h3>Контактная информация</h3>

                <label>Номер телефона*</label>
                <input className='new-phone' placeholder='Номер телефона' value={postPrice} onChange={e => setPostPrice(e.target.value)}/>
            </div>

            <div className='new-div-btn'>
                <button className='new-btn1' onClick={() => {onDelete()}}>Очистить</button>

                <button className='new-btn2' onClick={() => {
                    axios({
                    method: 'post',
                    url: 'https://6342cf0c3f83935a784a1cb6.mockapi.io/items',
                    data: {
                        id : Number(setItems.length),
                        title: postTitle,
                        category: postCategory,
                        description: postDescription,
                        phone: Number(postPhone),
                        price: Number(postPrice),
                        imageUrl: "img/item/NoImage.jpg"
                    }
                    });
                }}>Опубликовать</button>
            </div> 
        </div>
    </div>
  );
}