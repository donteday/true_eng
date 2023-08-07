import './Services.css';
import React from 'react';
import { Link } from "react-router-dom";


const services = [
    {
        name: "консультации",
        description: "Консультируем по всем вопросикам что куда балку воткнуть все знаем ребята",
        link: 'consult'
    },
    {
        name: "проектирование",
        description: "Могем запроектировать что вам по кайфу но дорого будет",
        link: 'proecting'

    },
    {
        name: "управление проектами",
        description: "Управляем с кайфом ежжи",
        link: 'project_assist'

    },
    {
        name: "технический аудит",
        description: "Техническо аудированные ребята",
        link: 'tech_audit'

    },
]

const Services = () => {
    return (
        <div className='services' id={'services'}>
            <div className='container'>
            <span className='services__header'>УСЛУГИ</span>

                <div className='services__box'>
                    {services.map((e, index) => {
                        return (
                            <div className='services__item'>
                                <span>0{index + 1}</span>
                                <p className='services__item-name'>{e.name}</p>
                                <p className='services__item-description'>{e.description}</p>
                                <Link to={`consult`}  className='services__item-btn'></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;



