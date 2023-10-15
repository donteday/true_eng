import { useParams } from "react-router-dom";
import { projectData } from "../../../data/ProjectsData";

import './ProjectPage.css';

const ProjectPage = () => {
    const params = useParams();
    const id = params.projectId;
    return (<div className="container">
        {console.log(projectData)}
        <div className="project-page">
            <div>
                <h3 className="project-page__name">
                    {projectData[id].name}
                </h3>
                <p>{projectData[id].title}</p>
            </div>

            <img className="project-page__img" src={require(`../../../data/${projectData[id].id}/prew.jpg`)} alt="" />
            <hr />
        </div>

    </div>);
}

export default ProjectPage;