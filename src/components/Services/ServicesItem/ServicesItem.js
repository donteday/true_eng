import './ServicesItem.css';
import { useParams } from 'react-router-dom';

const services = [
    {
        name: 'Строительное обследование и экспертиза',
        service: [
            {
                name: "Техническое обследование строительных конструкций",
                price: 35000,
            },
            {
                name: "Экспертиза завершенных и незавершенных строительных работ",
                price: 25000,
            },
            {
                name: "Экспертиза жилых и нежилых помещений",
                price: 25000,
            },
            {
                name: "Экспертиза в сокращенном формате (по полному комплекту исходных данных, включая фото и видео объекта, без выезда на объект)",
                price: 15000,
            },
        ]
    },
    {
        name: 'ПРОЕКТИРОВАНИЕ',
        service: [
            {
                name: "Проектирование монолитных железобетонных зданий жилого и общественного назначения",
                price: 25000,
            },
            {
                name: "Проектирование металлических конструкций различного назначения",
                price: 25000,
            },
            {
                name: "Проектирование проектов капитального ремонта, реконструкции и усиления",
                price: 15000,
            },
            {
                name: "Расчёты строительных конструкций",
                price: 15000,
            },
            {
                name: "Проектирование индивидуальных жилых зданий премиум класса",
                price: 100000,
            },
            {
                name: "Геотехническое проектирование",
                price: 25000,
            },
        ]
    },
    {
        name: 'Технический аудит',
        service: [
            {
                name: "Контроль объемов работ в проектной документации или их подсчёт",
                price: 10000,
            },
            {
                name: "Проверка проекта на соответствие строительным нормам и правилам",
                price: 12000,
            },
            {
                name: "Проверка выполненных расчётов по конструктивным решениям",
                price: 8000,
            },
            {
                name: "Комплексная проверка проектной и рабочей документации",
                price: 15000,
            },
            {
                name: "Приемка строительных работ и проверка выполненных работ",
                price: 20000,
            },
            {
                name: "Контроль проектной документации в процессе выполнения субподрядчиками",
                price: 30000,
            },
        ]
    },

]
const ServicesItem = () => {
    const params = useParams();
    const id = params.serviceId;
    return (
        <div className='sevice'>
            <div className='container'>
                <span className='sevice__item-header'>{services[id].name}</span>
                {services[id].service.map((e, index) =>
                    <>
                        <div className='sevice__item'>
                            <span className='sevices__item-title'>{e.name}</span>
                            <span className='sevices__item-price'>От {e.price}₽</span>
                        </div>
                        <hr />
                    </>
                )}


                <a href='https://forms.yandex.ru/cloud/64d4ded369387211d3f58ffa/' className="btn" target='blank'>
                    ОСТАВИТЬ ЗАЯВКУ
                </a>
            </div>
        </div>
    );
}

export default ServicesItem;