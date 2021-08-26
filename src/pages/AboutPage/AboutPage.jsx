import Education from "../../components/About/Education";
import WorkExperience from "../../components/About/WorkExperience";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="aboutPage">
            <h2>Education</h2>
            <hr />
            <div className="Education"><Education/></div>
            <h2>Work Experience</h2>
            <hr />
            <div className="WorkExperience"><WorkExperience/></div>
            <h2>Personal Interest</h2>
            <hr />
            <div className="Interest"></div>
        </div>
    )
}