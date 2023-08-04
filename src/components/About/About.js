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
                        <span>120+</span>
                        <p>проектов</p>
                    </div>
                    <div className="about__section">
                        <span>24+</span>
                        <p>сотрудника</p>
                    </div>
                    <button className="about__btn">
                        <img className="about__btn-img" src={require(`../../img/arrow.png`)} alt=""/>
                        подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default About;