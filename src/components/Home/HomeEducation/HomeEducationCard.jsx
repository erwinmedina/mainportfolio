import "./HomeEducation.css";
import { education } from "../../../education.js";
import { useState } from "react";

export default function HomeEducationCard({edu, index, courses, setCourses}) {

    function handleButton(event) {
        let tempCourses = {...courses}
        if (tempCourses[event.target.id]) {
            tempCourses[event.target.id] = false
        }
        else {
            for (const property in tempCourses) {
                tempCourses[property] = false
            }
            tempCourses[event.target.id] = true;
        }
        setCourses(tempCourses);
    }

    return (
        <div className="masterCard">
            <div className={`${courses[index] ? 'unhidden_cardWidth':''} card`}>
                <div className="card-top">
                    <img className={`${courses[index] ? 'unhidden_border' : ''} card-img-top`} src={edu.logo} alt="Card image cap"/>
                    <div className="HomeEducation-CardBody card-body">
                        <h5 className="card-title">{edu.name}</h5>
                        <p className="card-text">
                            {edu.time} <br/>
                            {edu.degree ? edu.degree : edu.type} <br/>
                            {edu.major} <br/>
                        </p>
                    </div>
                </div>
                <div className={`${courses[index] ? 'unhidden_CWContainer' : ""} CWContainer`}>
                    <button id={index} onClick={handleButton} className="btn btn-primary courseworkButton">Coursework</button>
                </div>
            </div>
            <div className={courses[index] ? 'unhidden' : 'hidden'}>
                <div className="scrollable-content">
                    {edu.coursework.map((course, index) => (
                        <div className="coursework" key={index}>
                            <div className="btn btn-sm btn-outline-dark">
                                {course}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}