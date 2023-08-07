import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className='header__container'>
                <img className="header__logo" src={require('../../img/logo_light.png')} alt="logo" srcset="" />
                <nav className="header__nav">
                    <a className="header__nav-link" href="s">Услуги</a>
                    <a className="header__nav-link" href="s">О Компании</a>
                    <a className="header__nav-link" href="s">Наши проекты</a>
                    <a className="header__nav-link" href="s">Контакты</a>
                </nav>
                <button className='button'>Оставить заявку</button>
            </div>

        </header>
    );
}

export default Header;