import "./Education.css";
import {useState} from 'react';

export default function Education() {
    const [UCI, setUCI] = useState(true);
    const [GA, setGA] = useState(true);

    function handleUCI() {
        setGA(!GA);
    }
    function handleGA() {
        setUCI(!UCI);
    }

    return (
        <div className="education container">
            <div className={`${UCI ? 'show' : 'hide'} educationUCI`}>
                <img onClick={handleUCI} src={`${process.env.PUBLIC_URL}/images/UCILogo.png`} alt="UCI" />
                {!GA && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>University of California Irvine</p>
                                <p>Graduated: June 2017</p>
                            </div>
                            <div className="educationBlockMajor">
                                <p>Major: Applied Mathematics</p>
                                <p>Minor: Earth System Science</p>
                            </div>
                        </div>
                        <div className="educationBlockBot">
                            <p>Coursework</p>
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Single Variable Calculus</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Multivariable Calculus</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Linear Algebra</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Abstract Mathematics</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Numerical Analysis</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Differential Equations</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Partial Differential Equations</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Abstract Algebra</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Group Theory</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Data Modeling</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Probability</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Elementary Analysis</li>
                        </div>

                    </div>
                }
            </div>
            <div className={`${GA ? 'show' : 'hide'} educationGA`}>
                <img onClick={handleGA} src={`${process.env.PUBLIC_URL}/images/GALogo.png`} alt="GA" />
                {!UCI && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>General Assembly</p>
                                <p>Graduated: May 2021</p>
                            </div>
                            <div className="educationBlockMajor">
                                <p>Certification: <br/>Software Engineering</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}