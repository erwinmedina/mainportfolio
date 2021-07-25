import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./HomeProjectsImages.css";

export default function HomeProjectImages() {
    const fadeImages = [
        'images/Mancala.png',
        'images/Liverpool.png',
        'images/Gamechanger.png',
        'images/PetTransfer.png',
        'images/TicTacToe.png',
    ];
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
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} />
                    </div>
                    <span>Mancala</span>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                    </div>
                    <span>Liverpool Cafe</span>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} />
                    </div>
                    <span>GameChanger</span>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[3]} />
                    </div>
                    <span>Pet Transfer</span>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[4]} />
                    </div>
                    <span>TicTacToe</span>
                </div>
            </Fade>
      </div>
    )
}