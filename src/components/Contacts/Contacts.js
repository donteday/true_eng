import './Contacts.css';
const contacts = [
    {
        name: 'Сарычев С.В',
        tel: "+799999999",
        job: 'Главный инженер'
    },
    {
        name: 'Крюков А.А',
        tel: "+799999999",
        job: 'IT специалист'
    },
    {
        name: 'Мистер Кот',
        tel: "у него лапки",
        job: 'Талисман'
    },
]

const Contacts = () => {
    return (
    <div className='container contacts__container'>
        <span className='contacts__header'>Контакты</span>
        <div className='contacts__mail'>
            <span >email: true@engineers.com</span>
            <span >телефон:  +79168334599</span>
        </div>
        <span className='contacts__header'>Наша команда</span>

        <div className='contacts__box'>
            {contacts.map((e, index) =>
                <div className='contacts'>
                    <img className='contacts__img' src={require(`../../img/contacts_${index}.jpg`)} alt="" srcset="" />
                    <div className='contacts__info'>
                        <h3 className='contacts__info-name'>{e.name}</h3>
                        <span>{e.job}</span>
                        <hr />
                        <span>TG/WA: {e.tel}</span>
                    </div>
                </div>
            )}
        </div>
    </div>);
}

export default Contacts;