import "./WorkExperience.css";
import {useState} from 'react';
import Work_Knox from "./Work_Knox";
import Work_Revel from "./Work_Revel";
import Work_VCI from "./Work_VCI";

export default function WorkExperience() {
    
    const [experience, setExperience] = useState ([
        {name: 'all', selected: true},
        {name: 'knox', selected: false},
        {name: 'revel', selected: false},
        {name: 'vci', selected: false},
    ])

    function handleClick(event) {
        const updateExperience = [...experience];
        
        experience[0].selected = !experience[0].selected
        updateExperience.forEach(exp => {
            if (event.target.id === exp.name) {
                exp.selected = !exp.selected;
            }
        })
        setExperience(updateExperience);
    }

    return (
        <div className="education container">
            <div className={`${experience[0].selected ? 'show' : 'hide'} education container d-flex flex-column d-sm-flex flex-sm-row`}>
                <div>
                    <img onClick={handleClick} id="knox" className="workLogo" src={`${process.env.PUBLIC_URL}/images/KnoxLogo.png`} alt="knox" />
                    <p>2017-2018</p>
                </div>
                <div>
                    <img onClick={handleClick} id="revel" className="workLogo" src={`${process.env.PUBLIC_URL}/images/RevelLogo.jpeg`} alt="revel" />
                    <p>2018-2021</p>
                </div>
                <div>
                    <img onClick={handleClick} id="vci" className="workLogo" src={`${process.env.PUBLIC_URL}/images/VCILogo.jpeg`} alt="VCI" />
                    <p>2021-2022</p>
                </div>
            </div>
            <div>
                {(() => {
                    if (experience[1].selected) {
                        return <Work_Knox handleClick={handleClick}/>
                    }
                    else if (experience[2].selected) {
                        return <Work_Revel handleClick={handleClick}/>
                    }
                    else if (experience[3].selected) {
                        return <Work_VCI handleClick={handleClick}/>
                    }
                })()} 
            </div>
        </div>
    )
}