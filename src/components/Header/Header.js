import './Header.css';
import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className='header__container'>
                <NavLink href="/">
                    <img className="header__logo" src={require('../../img/logo_light.png')} alt="logo" srcset="" />
                </NavLink>
                <nav className="header__nav">
                    <a href="/#services" className="header__nav-link" >Услуги</a>
                    <a className="header__nav-link" href="s">О Компании</a>
                    <a className="header__nav-link" href="s">Наши проекты</a>
                    <Link to={'/contacts'} className="header__nav-link">Контакты</Link>
                </nav>
                <a href='https://t.me/true_engineers' className='header__tg' target='blank'> </a>
            </div>

        </header>
    );
}

export default Header;