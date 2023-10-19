import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return (<footer className='footer'>
        <div className='container footer__container'>
            <div className='footer__link'>
                <Link  href="#">Услуги</Link>
                <Link to={'/projects'} relative="path" reloadDocument>Проекты</Link>
                <a href="#">Новости</a>
                <Link to={'/contacts'} relative="path" reloadDocument>Сотрудники</Link>
                <a href="#">Конфиденциальность</a>
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