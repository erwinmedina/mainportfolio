
import { workexperience } from "../../../workexperience.js";
import { useState} from "react";
import HomeExperienceCard from "./HomeExperienceCard";


export default function HomeExperience() {
    const [job, setJob] = useState(
        {
            0: false,
            1: false,
            2: false,
        }
    )
    return (
        <div className="HomeExperience">
            <h2>Work Experience</h2>
            <hr />
            <div className="HomeExperienceCards">
                {workexperience.map((work, index) =>
                    <HomeExperienceCard
                        work={work}
                        index={index}
                        job={job}
                        setJob={setJob}
                    />
                
                )}
            </div>
        </div>
    )
}