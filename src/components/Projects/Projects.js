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
                    <div className='projects__item'>
                        <div className='projects__item-img'>
                            <img  src={require(`../../img/${e.img}`)} alt="" />
                        </div>
                        <span className='projects__item-name'>{e.name}</span>
                        <p className='projects__item-title'>{e.title}</p>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Projects;