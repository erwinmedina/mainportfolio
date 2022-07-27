import { useState } from "react";
import HomeSkillsMain from "./HomeSkillsMain";
import HomeSkillsLanguages from "./HomeSkillsLanguages";
import HomeSkillsOffice from "./HomeSkillsOffice";
import HomeSkillsDesign from "./HomeSkillsDesign";
import "./HomeSkills.css";

export default function HomeSkills() {
    const [buttons, setButtons] = useState([
        { name: 'Tools', selected: true},
        { name: 'Languages', selected: false},
        { name: 'Office', selected: false},
        { name: 'Design', selected: false},
    ])

    function handleClick(event) {
        const updateButtons = [...buttons];
        updateButtons.forEach(button => {
            button.selected = false;
            if (event.target.innerHTML === button.name) {
                button.selected = true;
            }
        })
        setButtons(updateButtons);
    }

    return (
        <div className="HomeSkills">
            <h2>Skills List</h2>
            
            <div className="buttonContainer row">
                <div onClick={handleClick} className={`col-lg-2 col-md-12 btn btn-primary ${buttons[0].selected ? 'selected' : ''}`}>Tools</div>
                <div onClick={handleClick} className={`col-lg-2 col-md-12 btn btn-danger ${buttons[1].selected ? 'selected' : ''}`}>Languages</div>
                <div onClick={handleClick} className={`col-lg-2 col-md-12 btn btn-warning ${buttons[2].selected ? 'selected' : ''}`}>Office</div>
                <div onClick={handleClick} className={`col-lg-2 col-md-12 btn btn-success ${buttons[3].selected ? 'selected' : ''}`}>Design</div>
            </div>
            <hr />
                <div className="skillsContainer">
                    {(() => {
                        
                            if (buttons[0].selected) {
                                return <HomeSkillsMain/>
                            }
                            else if (buttons[1].selected) {
                                return <HomeSkillsLanguages/>
                            }
                            else if (buttons[2].selected) {
                                return <HomeSkillsOffice/>
                            }
                            else if (buttons[3].selected) {
                                return <HomeSkillsDesign/>
                            }
                    })()}
                </div>
        </div>
    )
}