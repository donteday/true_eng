import { Link } from 'react-router-dom';
import './Projects.css';

const projectsArr = [
    {
        name: 'Имя проекта',
        title: 'Описание проекта',
        img: 'project_1.jpg'
    },
    {
        name: 'Машина Убийца',
        title: 'Райан Гослинг',
        img: 'contacts_0.jpg'
    },
    {
        name: 'Имя проекта',
        title: 'Описание проекта',
        img: 'project_1.jpg'
    },
]


const Projects = () => {
    return (
        <div className='container projects'>
            <span className='projects__header'>Проекты<hr /></span>
            
            <div className='projects__box'>
                {projectsArr.map((e, index) =>
                    <Link to={`projects/${index}`} className='projects__item'>
                        <div className='projects__item-img'>
                            <img  src={require(`../../img/${e.img}`)} alt="" />
                        </div>
                        <h3 to={`projects/${index}`} className='projects__item-name'>{e.name}</h3>
                        <p className='projects__item-title'>{e.title}</p>
                    </Link>
                )
                }
            </div>
        </div>
    );
}

export default Projects;