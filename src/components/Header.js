import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='header-div'>
        <Link to="">
          <h1 className="header-OLX">OLX</h1>
        </Link>
        <nav>
          <ul className="d-flex">
            <li>
              <Link to="favorites">
                <svg className='svg1' fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="28px" height="28">    
                  <path d="M25,27l-9-6.75L7,27V4h18V27z"/>
                </svg>
              </Link>
            </li>

            <li>
              <Link to="">
                <h3 className="header-main" >Главная</h3>
              </Link>
            </li>

            <li>
              <Link to="aboutUs">
                <h3 className="header-main">Про нас</h3>
              </Link>
            </li>

            <li>
              <Link to="newItem">
                <button className='header-btn'>Подать объявление</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}