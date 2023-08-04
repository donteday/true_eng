import './Main.css';
import React from 'react';

const Main = () => {

    const services = [
        "консультации", "проектирование", "управление проектами", "технический аудит"
    ]

    return (
        <main className='main'>
            <div className='main__container'>
                <h2 className='main__head'>Мы - компания с широким спектром услуг в области строительства и девелопмента:</h2>
                <div className='main__services-container'>
                    {services.map((e, index) => {
                        return (
                            <div className='main__services'>
                                <span>{index + 1}</span>
                                <p>{e}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default Main;