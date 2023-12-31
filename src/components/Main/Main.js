import './Main.css';
import React from 'react';

const Main = () => {

    // const services = [
    //     "качество", "скорость", "отношение", "цены"
    // ]
    const services = [
        "экспертиза", "проектирование", "управление проектами", "технический аудит"
    ]

    return (
        <main className='main'>
            <div className='main__hat'></div>
            <div className='main__container'>
                <h2 className='main__head'><b>TRUE ENGINEERS</b> - компания с широким спектром услуг в области строительства и девелопмента:</h2>
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

            {/* <a className='main__btn' href='c'>ОСТАВИТЬ ЗАЯВКУ</a> */}
        </main>
    );
}

export default Main;