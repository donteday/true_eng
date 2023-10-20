import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return (<footer className='footer'>
        <div className='container footer__container'>
            <div className='footer__link'>
                <Link to={'/services'}>Услуги</Link>
                <Link to={'/projects'} relative="path" reloadDocument>Проекты</Link>
                <Link to={'/news'} relative="path" reloadDocument>Новости</Link>
                <Link to={'/contacts'} relative="path" reloadDocument>Сотрудники</Link>
                {/* <Link to={'/confidencial'} relative="path" reloadDocument>Конфиденциальность</Link> */}
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