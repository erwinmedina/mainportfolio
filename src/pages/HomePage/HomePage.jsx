import HomeEducation from "../../components/Home/HomeEducation/HomeEducation";
import HomeExperience from "../../components/Home/HomeExperience/HomeExperience";
import HomeFooter from "../../components/Home/HomeFooter/HomeFooter";
import HomeProjects from "../../components/Home/HomeProjects/HomeProjects";
import HomeSkills from "../../components/Home/HomeSkills/HomeSkills";
import HomeTitle from "../../components/Home/HomeTitle/HomeTitle";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="HomePageTop">
                <HomeTitle/>
            </div>
            <HomeEducation/>
            <HomeExperience/>
            <HomeSkills/>
            <HomeProjects/>
            {/* <HomeFooter/> */}
        </div>
    )
}