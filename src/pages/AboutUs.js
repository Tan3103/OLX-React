import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="about">
            <div className="about-div">
                <h1 className="about_h1">OLX</h1>
                <p>Крупнейший онлайн-сервис объявлений Казахстана</p>
                <p>Все онлайн-объявления Казахстана на OLX - здесь вы найдете то, что искали!</p>
                <p>Нажав на кнопку 
                    <Link to="newItem">
                        <button className='about-btn'>Подать объявление</button>
                    </Link>
                </p>
                <p>вы сможете разместить объявление на любую тематику легко и быстро.</p>
                <p>С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.</p>
            </div>
        </div>
    );
}