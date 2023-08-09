import './Footer.css';


const Footer = () => {
    return (<footer className='footer'>
        <div className='container footer__container'>
            <div className='footer__link'>
                <a href="s">Услуги</a>
                <a href="s">Проекты</a>
                <a href="s">Новости</a>
                <a href="s">Сотрудники</a>
                <a href="s">Конфиденциальность</a>
            </div>
            <div className='footer__contacts'>
                <h3>Контакты для связи:</h3>
                <span >email: true@engineers.com</span>
                <span >телефон:  +79168334599</span>
            </div>
        </div>
    </footer>);
}

export default Footer;