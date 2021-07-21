import { Fade } from 'react-slideshow-image';
import { motion } from "framer-motion";
import 'react-slideshow-image/dist/styles.css'
import { useState } from 'react';
import FadeIn from "react-fade-in";
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
            <div className="rowContainer container-fluid row">
                {projects.map(project => (
                    <FadeIn className="project col-lg-4 col-md-6 col-sm-12">
                        <div className={`ProjectCardContainer ${details ? "disableStuff":''}`}>
                            <div className="ProjectCardImage">
                                <img src={project.images[0]} alt="" />
                            </div>
                            <div className="ProjectCardDetails">
                                <p>{project.name}</p>
                                <p>{project.short}</p>
                                <div className="ProjectCardDetailsButtonContainer">
                                    <button onClick={() => handleDetailButton(project)} className="btn btn-lg btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            



            { details &&
            <div className="popUpRow row">
                <div className="ProjectCardDetailPop col-lg-12 col-md-12 col-sm-12">
                    <div className="DetailPopTitle">
                        <p>{projectDetails.name}</p>
                        <div onClick={handleDetailButton} className="btn btn-danger">X</div>
                    </div>
                    <div className="DetailPopTop row">
                        <div className="slide-container col-lg-7 col-md-12 col-sm-12">
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
                        <div className="PopTopContainer container col-lg-5 col-md-6 col-sm-12">
                            { projectDetails.skills.map(skill =>
                                <div className="btn btn-sm btn-outline-dark">{skill}</div>
                                
                            )}
                        </div>
                    </div>
                    <div className="PopBotRow row">
                        <div className="DetailPopBot col-lg-12 col-md-12 col-sm-12">
                            <p>{projectDetails.long}</p>
                        </div>
                    </div>
                    <div className="DetailBotButtons">
                        <a href={projectDetails.github} target="_blank" className="btn btn-primary">
                            <i class="fab fa-github"></i>
                            Github</a>

                        <a href={projectDetails.demo}  target="_blank" className="btn btn-primary">
                            <i class="fas fa-laptop"></i>
                            Demo</a>
                    </div>
                </div>
            </div>
        }
           
        </div>
    )
}