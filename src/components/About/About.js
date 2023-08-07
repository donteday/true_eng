import './About.css';


const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__section-box">
                    <div className="about__section">
                        <span>10+</span>
                        <p>лет опыта</p>
                    </div>
                    <div className="about__section">
                        <span>256+</span>
                        <p>проектов</p>
                    </div>
                    <div className="about__section">
                        <span>12+</span>
                        <p>сотрудников</p>
                    </div>
                    <button className="about__btn">
                        <img className="about__btn-img" src={require(`../../img/arrow.png`)} alt=""/>
                        ОСТАВИТЬ <br /> ЗАЯВКУ</button>
                </div>
            </div>
        </div>
    );
}

export default About;