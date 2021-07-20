import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useState } from 'react';
import { projects } from "../../../projects.js";
import "./ProjectCard.css";

export default function ProjectCard() {
    const [details, setDetails] = useState(false);
    const [projectDetails, setProjectDetails] = useState({});
    
    const properties = {
        duration: 2000,
        transitionDuration: 1000,
        infinite: true,
        arrows: false,
    };

    function handleDetailButton(project) {
        setProjectDetails(project);
        setDetails(!details);
    }
    
    return (
        <div className="ProjectCard">
            { projects.map(project => 
                <div className="ProjectCardContainer">
                <div className="ProjectCardImage">
                    <img src={project.images[0]} alt="" />
                </div>
                <div className="ProjectCardDetails">
                    <p>{project.name}</p>
                    <p>{project.short}</p>
                    <div className="ProjectCardDetailsButtonContainer">
                        <button onClick={() => handleDetailButton(project)} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            )}
            
            { details && 
            <div className="ProjectCardDetailPop">
                <div className="DetailPopTitle">
                    <p>{projectDetails.name}</p>
                    <div onClick={handleDetailButton} className="btn btn-danger">BACK</div>
                </div>
                <div className="DetailPopTop">
                    <div className="slide-container">
                        <Fade {...properties}>
                            {projectDetails.images.map(image =>
                                <div className="each-fade">
                                    <div className="PopTopImageContainer">
                                        <img src={image} alt="" />
                                    </div>
                                </div>
                            )}
                        </Fade>
                    </div>
                    <div className="PopTopContainer container">
                        { projectDetails.skills.map(skill =>
                            <div className="btn btn-sm btn-outline-secondary">{skill}</div>
                            
                        )}
                    </div>
                </div>
                <div className="DetailPopBot">
                    <p>{projectDetails.long}</p>
                </div>
                <div className="DetailBotButtons">
                        <button className="btn btn-primary">Github</button>
                        <button className="btn btn-primary">Demo</button>
                    </div>
            </div>
            
            }
           
        </div>
    )
}