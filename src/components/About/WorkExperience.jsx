import "./WorkExperience.css";
import {useState} from 'react';
import FadeIn from "react-fade-in";

export default function WorkExperience() {
    const [revel, setRevel] = useState(true);
    const [knox, setKnox] = useState(true);
    const [vci, setVci] = useState(true);

    function handleRevel() {
        setKnox(!knox);
        setVci(!vci);
    }
    function handleKnox() {
        setRevel(!revel);
        setVci(!vci);
    }
    function handleVci() {
        setRevel(!revel);
        setKnox(!knox);
    }
    // EXTRA LINE

    return (
        <div className="education container">
             {/* THIS HANDLES KNOX ATTORNEY SERVICES - FIRST JOB */}
            <div className={`${knox ? 'show' : 'hide'} educationknox`}>
                <img onClick={handleKnox} className="workLogo" src={`${process.env.PUBLIC_URL}/images/KnoxLogo.png`} alt="knox" />
                    {!revel && 
                        <FadeIn transitionDuration={1500}>
                        <div className="educationBlock">
                            <div className="educationBlockTop">
                                <div className="educationBlockNameDate">
                                    <p>Knox Attorney Services</p>
                                    <p>Data Entry Specialist</p>
                                    <p>July 2017 - July 2018</p>
                                </div>
                                
                            </div>
                            <div className="educationBlockBot">
                                {/* <p>Topics</p> */}
                                <hr />
                                <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Data Entry</li>
                                <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Quality Control</li>
                                <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Team Communication</li>
                            </div>
                        </div>
                        </FadeIn>
                    }
                    <p className="year">2017-2018</p>
            </div>
            
            {/* THIS HANDLES REVEL ENERGY - MY SECOND ROLE */}
            <div className={`${revel ? 'show' : 'hide'} educationrevel`}>
                <img onClick={handleRevel} className="workLogo" src={`${process.env.PUBLIC_URL}/images/RevelLogo.jpeg`} alt="revel" />
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
                            {/* <p>Topics</p> */}
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
                <p className="year">2018-2021</p>
            </div>

            {/* THIS HANDLES VCI, MY THIRD COMPANY */}
            <div className={`${vci ? 'show' : 'hide'} educationvci`}>
                <img onClick={handleVci} className="workLogo" src={`${process.env.PUBLIC_URL}/images/VCILogo.jpeg`} alt="VCI" />
                {!knox && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>VCI Construction LLC.</p>
                                <p>Project Data Analyst</p>
                                <p>October 2021 - July 2022</p>
                            </div>
                        </div>
                        <div className="educationBlockBot">
                            {/* <p>Topics</p> */}
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Database Management</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Excel</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Visual Basic Scripts</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Automation</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Power BI</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Refactor</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">QA / QC</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">PM, CX, 3GIS Team</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Reports</li>
                        </div>
                    </div>
                }
                <p className="year">2021-2022</p>
            </div>
           
        </div>
    )
}