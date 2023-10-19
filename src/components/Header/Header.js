import './Header.css';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useRef } from 'react';

const Header = () => {
    const menuRef = useRef();

    function menuActive() {
        menuRef.current.classList.value.includes('header__nav-active') ?
            menuRef.current.classList.remove('header__nav-active')
            :
            menuRef.current.classList.add('header__nav-active');
    }

    return (
        <header className="header">
            <div className='header__container'>
                <NavLink href="/">
                    <img className="header__logo" src={require('../../img/logo_light.png')} alt="logo" srcset="" />
                </NavLink>
                <nav className="header__nav" ref={menuRef}>
                    <Link to={'/services'} relative="path" className="header__nav-link" reloadDocument >Услуги</Link>
                    <Link to={'/projects'} relative="path" className="header__nav-link" reloadDocument>проекты</Link>
                    <Link to={'/news'} relative="path" className="header__nav-link" reloadDocument>Новости</Link>
                    <Link to={'/contacts'} relative="path" className="header__nav-link" reloadDocument>Контакты</Link>
                </nav>
                <div className='header__nav-btn' onClick={menuActive}>
                    <div className='header__nav-btn-line1'></div>
                    <div className='header__nav-btn-line1'></div>
                    <div className='header__nav-btn-line1'></div>
                </div>
                <a href='https://t.me/true_engineers' className='header__tg' target='blank'> </a>
            </div>

        </header>
    );
}

export default Header;