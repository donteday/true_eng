import './Services.css';
import React from 'react';
import { Link } from "react-router-dom";

const services = [
    // {
    //     name: "консультации",
    //     description: "Наши специалисты могут проконсультировать вас по вопросам проектирования, согласования проекта и прохождения экспертизы",
    //     link: 'consult'
    // },
    {
        name: "Обследование и экспертиза",
        description: "Надзор за проведением каждого этапа строительства, оценка и прием качества работ",
        link: 'project_assist'

    },
    {
        name: "проектирование",
        description: "Проектирование ж/б и металлоконструкций разного рода назначений, расчет нагрузок, проекты по ремонту и реконструкций...",
        link: 'proecting'

    },

    {
        name: "технический аудит",
        description: "Контроль объемов и качества, сроков строительных работ в соответствии с проектной документацией, контроль качества применяемых материалов, надзор за ходом строительных работ",
        link: 'tech_audit'
    },
]

const Services = () => {
    return (
        <div className='services' id={'services'}>
            <div className='container'>
            <span className='services__header'>УСЛУГИ<hr /></span>

                <div className='services__box'>
                    {services.map((e, index) => {
                        return (
                            <div className='services__item'>
                                <span>0{index + 1}</span>
                                <p className='services__item-name'>{e.name}</p>
                                <p className='services__item-description'>{e.description}</p>
                                <Link to={`services/${index}`}  className='services__item-btn'></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;



