import { Fade } from 'react-slideshow-image';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import "./HomeProjectsImages.css";
import { projects } from "../../../projects.js";

export default function HomeProjectImages() {
    
    var fadeImages = projects.map(project => ({
            'name': project.name,
            'img': project.images[0]
        }
    ));

    const properties = {
        duration: 3000,
        transitionDuration: 1000,
        infinite: true,
        prevArrow: <div className="left" style={{width: "40px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
        nextArrow: <div className="right" style={{width: "40px", marginLeft: "-20px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
    };
    
    return (
        <div className="slide-container">
            <Fade {...properties}>
                {fadeImages.map(item =>
                    <div className="each-fade">
                        <div className="image-container">
                            <Link to="/projectpage">
                                <img src={item.img} />
                            </Link>
                        </div>
                        <span>{item.name}</span>
                    </div>
                )}
            </Fade>
      </div>
    )
}