import {Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  return (
      <div className="navbarPage">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projectpage">Projects</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/aboutpage">About Me</Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" target="_blank" href={process.env.PUBLIC_URL + '/pdf/Resume.pdf'}>Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
        );
}
