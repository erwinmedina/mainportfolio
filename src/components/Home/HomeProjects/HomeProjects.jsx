import "./HomeProjects.css";
import HomeProjectsImages from "./HomeProjectsImages";
import HomeProjectsCard from "./HomeProjectsCard";

export default function HomeProjects() {
    return (
        <div className="HomeProjects">
            <h2>Projects</h2>
            <hr />
            <HomeProjectsImages/>
            {/* <HomeProjectsCard/> */}

        </div>
    )
}