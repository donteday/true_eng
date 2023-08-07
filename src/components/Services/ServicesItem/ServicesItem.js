import './ServicesItem.css';

const services = [
    [
    {
        header: 'Проектирование монолитных железобетонных зданий жилого и общественного назначения',
        description: 'Выполняем проектирование раздела КЖ c использованием технологий BIM-моделирования. Для расчётов используем такие программы как SCAD, Лира-Сапр. Подтверждаем свои расчёты локальными ручными проверками.Чертежи содержат полную информацию для необходимого выполнения на строительной площадке: спецификации, планы, детальные узлы конструкций'
    },
    {
        header: 'Проектирование металлических конструкций различного назначения',
        description: 'Выполняем проектирование раздела КМ таких типов объектов как: промышленные здания, общественные здания, навесы и арт-объекты, эстакады, технологические площадки и подконструкции.Чертежи содержат необходимую информацию для формирования бюджета проекта, планирования строительного процесса и передачи на завод-изготовитель металлоконструкций'
    },
    {
        header: 'Проектирование монолитных железобетонных зданий жилого и общественного назначения',
        description: 'Выполняем проектирование раздела КЖ c использованием технологий BIM-моделирования. Для расчётов используем такие программы как SCAD, Лира-Сапр. Подтверждаем свои расчёты локальными ручными проверками.Чертежи содержат полную информацию для необходимого выполнения на строительной площадке: спецификации, планы, детальные узлы конструкций'
    },
    {
        header: 'Проектирование монолитных железобетонных зданий жилого и общественного назначения',
        description: 'Выполняем проектирование раздела КЖ c использованием технологий BIM-моделирования. Для расчётов используем такие программы как SCAD, Лира-Сапр. Подтверждаем свои расчёты локальными ручными проверками.Чертежи содержат полную информацию для необходимого выполнения на строительной площадке: спецификации, планы, детальные узлы конструкций'
    },
    {
        header: 'Проектирование монолитных железобетонных зданий жилого и общественного назначения',
        description: 'Выполняем проектирование раздела КЖ c использованием технологий BIM-моделирования. Для расчётов используем такие программы как SCAD, Лира-Сапр. Подтверждаем свои расчёты локальными ручными проверками.Чертежи содержат полную информацию для необходимого выполнения на строительной площадке: спецификации, планы, детальные узлы конструкций'
    },
    {
        header: 'Проектирование монолитных железобетонных зданий жилого и общественного назначения',
        description: 'Выполняем проектирование раздела КЖ c использованием технологий BIM-моделирования. Для расчётов используем такие программы как SCAD, Лира-Сапр. Подтверждаем свои расчёты локальными ручными проверками.Чертежи содержат полную информацию для необходимого выполнения на строительной площадке: спецификации, планы, детальные узлы конструкций'
    }],

]
const ServicesItem = () => {
    return (
        <div className='sevices-item'>
            <div className='container'>
                <span className='sevices__header'>ПРОЕКТИРОВАНИЕ</span>

                {services[0].map((e, index) =>
                    <div className='sevices__item'>
                        <h3 className='sevices__item-header'>{e.header}</h3>
                        <hr />
                        <p className='sevices__description'>{e.description}</p>
                    </div>)}
            </div>
        </div>
    );
}

export default ServicesItem;