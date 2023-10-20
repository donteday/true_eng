import { Link } from 'react-router-dom';
import './ProjectsSlider.css';
import { projectData } from "../../../data/ProjectsData";
import { useRef } from 'react';

// console.log(/^node .*react-scripts\/scripts\/start\.js\s?$/);
const ProjectsSlider = () => {
    function moveTo() {window.scrollTo(0, 0)};
    const sliderRef = useRef();

    function arrowHandeler(e) {
        e.target.className.includes('left') ?
        sliderRef.current.scrollLeft-=475
        : sliderRef.current.scrollLeft+=475;
    }

    return (
        <div className='container projects'>
            <span className='projects__header'>Проекты<hr /></span>
            <div className='projects__slider'>
                <div className='projects__slider-arrow left' onClick={arrowHandeler}>&#10094;</div>
                <div className='projects__box' ref={sliderRef}>
                    {projectData.map((e, index) =>
                        <Link to={`/projects/${index}`} relative="path" className='projects__item' reloadDocument>
                            <img className='projects__item-img' src={require(`../../../data/${e.id}/prew.jpg`)} alt="" />
                            <h3 to={`projects/${index}`} className='projects__item-name'>{e.name}</h3>
                            <p className='projects__item-title'>{e.title}</p>
                        </Link>
                    )
                    }

                </div>
                <div className='projects__slider-arrow right' onClick={arrowHandeler}>&#10095;</div>

            </div>
            <Link  to={'/projects'} relative="path" className='main__btn' onClick={moveTo}>
                все проекты</Link>

        </div>
    );
}

export default ProjectsSlider;