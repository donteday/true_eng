import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className='header__container'>
                <div className="header__logo">
                    <h2>TRUE ENGINEERS</h2>
                </div>
                <nav className="header__nav">
                    <a className="header__nav-link" href="s">Услуги</a>
                    <a className="header__nav-link" href="s">О Компании</a>
                    <a className="header__nav-link" href="s">Наши проекты</a>
                    <a className="header__nav-link" href="s">Контакты</a>
                </nav>
                <button className='button'>Связаться</button>
            </div>

        </header>
    );
}

export default Header;