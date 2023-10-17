import { useParams } from "react-router-dom";
import { projectData } from "../../../data/ProjectsData";

import './ProjectPage.css';

const ProjectPage = () => {
    const params = useParams();
    const id = params.projectId;
    const project = projectData[id];
    return (<div className="container">
        {console.log(projectData)}
        <div className="project-page">
            <div className="project-page__header">
                <div className="project-page__info">
                    <h3 className="project-page__name">{project.name}</h3>
                    <p>{project.title}</p>
                </div>
                <img className="project-page__img" src={require(`../../../data/${project.id}/prew.jpg`) } data-zoom-image={require(`../../../data/${project.id}/prew.jpg`) } alt="" />
            </div>
            <hr />
            <div className='project-page__grid'>

                {project.photos?.map((photo, index) =>
                    <img className="project-page__photo" src={require(`../../../data/${project.id}/${photo}.png`)} alt="" />

                )}
            </div>

        </div>

    </div>);
}

export default ProjectPage;