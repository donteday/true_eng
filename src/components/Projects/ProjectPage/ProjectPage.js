import { useParams } from "react-router-dom";
import './ProjectPage.css';

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

const ProjectPage = () => {
    const params = useParams();
    const id = params.projectId;
    return (<div className="container">
        <div className="project-page">
            <h3 className="project-page__name">
                {projectsArr[id].name}
            </h3>
            <p>{projectsArr[id].title}</p>
            <img className="project-page__img" src={require(`../../../img/${projectsArr[id].img}`)} alt="" />
        </div>

    </div>);
}

export default ProjectPage;