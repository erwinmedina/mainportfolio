import "./Education.css";
import {useState} from 'react';
import Education_UCI from "./Education_UCI"
import Education_GA from "./Education_GA";
import Education_Fullerton from "./Education_Fullerton";

export default function Education() {

    const [education, setEducation] = useState([
        {name: 'all', selected: true},
        {name: 'uci', selected: false},
        {name: 'ga', selected: false},
        {name: 'fullerton', selected: false},
    ])

    function handleClick(event) {
        const updateEducation = [...education];
        education[0].selected = !education[0].selected;
        updateEducation.forEach(edu => {
            if (event.target.id === edu.name) {
                edu.selected = !edu.selected;
            }
        })
        setEducation(updateEducation)
    }

    return (
        <div className="d-flex flex-column d-sm-flex flex-sm-row education container">
            <div className={`${education[0].selected ? 'show' : 'hide'} education container d-flex flex-column d-sm-flex flex-sm-row`}>
                <div>
                    <img id="uci" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/UCILogo.png`} alt="UCI" />
                    <p>2012-2017</p>
                </div>
                <div>
                    <img id="ga" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/GALogo.png`} alt="GA" />
                    <p>2021</p>
                </div>
                <div>
                    <img id="fullerton" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/FullertonLogo.png`} alt="Fullerton" />
                    <p>2022-2024</p>
                </div>
            </div>
            
            <div>
                {(() => {
                    if (education[1].selected) {
                        return <Education_UCI handleClick={handleClick}/>
                    }
                    else if (education[2].selected) {
                        return <Education_GA handleClick={handleClick}/>
                    }
                    else if (education[3].selected) {
                        return <Education_Fullerton handleClick={handleClick}/>
                    }
                })()} 
            </div>
        </div>
    )

       
}