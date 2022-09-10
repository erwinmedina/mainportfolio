import "./HomeEducation.css";

import { education } from "../../../education.js";
import { useState } from "react";
import HomeEducationCard from "./HomeEducationCard";

export default function HomeEducation() {
    const [courses, setCourses] = useState({
        0: false,
        1: false,
        2: false
    })

    return (
        <div className="HomeEducation">
            <h2>Education</h2>
            <hr />
                <div className="HomeEducationCards">
                    {education.map((edu, index) => (
                        <HomeEducationCard edu={edu} index={index} courses={courses} setCourses={setCourses}/>
                    ))}
                </div>
        </div>
    )
}