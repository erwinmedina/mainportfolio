import "./HomeProjects.css";
import { Link } from "react-router-dom";
import HomeProjectsImages from "./HomeProjectsImages";

export default function HomeProjects() {
    return (
        <div className="HomeProjects">
            <Link to="/projectpage">
                <h2>Projects</h2>
            </Link>
            <hr />
            <HomeProjectsImages/>

        </div>
    )
}