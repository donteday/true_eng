import { projectData } from "../../data/ProjectsData";
import './Projects.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

const projectsType = [
    {
        type: 'all',
        transcription: 'Все'
    },
    {
        type: 'prom',
        transcription: 'Промышленные здания'
    },
    {
        type: 'grazhd',
        transcription: 'Гражданские здания'
    },
    {
        type: 'reconst',
        transcription: 'Усиление и реконструкция'
    },
    {
        type: 'calc',
        transcription: 'Расчеты'
    },
]


const Projects = () => {
    const [currentType, setCurrentType] = useState('all');

    function switchType(type) {
        setCurrentType(type)
    }

    return (
        <div>
            <div className="projects__nav">
                {projectsType.map((e, index) =>
                    <div className={`projects__nav-link ${e.type === currentType ? "link__active" : ""}`} onClick={() => switchType(e.type)}>
                        {e.transcription}
                    </div>
                )}
            </div>
            <div className="projects__grid">
                {projectData.map((e, index) =>
                    currentType === e.type || currentType === 'all'?
                        (<Link to={`/projects/${index}`} relative="path" className='projects__grid-box'>
                            <img className="projects__preview" src={require(`../../data/${e.id}/prew.jpg`)} alt="" />
                            <div className="projects__name">{e.name}</div>
                        </Link>) : ('')



                )
                }
            </div>
        </div>
    );
}

export default Projects;