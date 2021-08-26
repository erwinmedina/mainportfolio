import "./WorkExperience.css";
import {useState} from 'react';

export default function WorkExperience() {
    const [revel, setRevel] = useState(true);
    const [knox, setKnox] = useState(true);

    function handleRevel() {
        setKnox(!knox);
    }
    function handleKnox() {
        setRevel(!revel);
    }

    return (
        <div className="education container">
            <div className={`${revel ? 'show' : 'hide'} educationrevel`}>
                <img onClick={handleRevel} src={`${process.env.PUBLIC_URL}/images/RevelLogo.jpeg`} alt="revel" />
                {!knox && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>Revel Energy, LLC.</p>
                                <p>Energy Analyst</p>
                                <p>July 2018 - February 2021</p>
                            </div>
                        </div>
                        <div className="educationBlockBot">
                            <p>Topics</p>
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">XML/CSV Data</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Visual Basic</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Excel</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Helioscope</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">SketchUp / AutoCAD</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Communication</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Negotiation</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Data Analysis</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Design</li>
                        </div>

                    </div>
                }
            </div>
            <div className={`${knox ? 'show' : 'hide'} educationknox`}>
                <img onClick={handleKnox} src={`${process.env.PUBLIC_URL}/images/KnoxLogo.png`} alt="knox" />
                {!revel && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>Knox Attorney Services</p>
                                <p>Data Entry Specialist</p>
                                <p>July 2017 - July 2018</p>
                            </div>
                            
                        </div>
                        <div className="educationBlockBot">
                            <p>Topics</p>
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Data Entry</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Quality Control</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Team Communication</li>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}