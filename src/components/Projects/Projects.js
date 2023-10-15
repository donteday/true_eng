import { projectData } from "../../data/ProjectsData";
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects__grid">
            {projectData.map((e, index) =>
            <Link to={`/projects/${index}`} relative="path" className='projects__grid-box'>
                <img className="projects__preview" src={require(`../../data/${e.id}/prew.jpg`)} alt="" />
                <div className="projects__name">{e.name}</div>

            </Link>
            )}
        </div>


    );
}

export default Projects;