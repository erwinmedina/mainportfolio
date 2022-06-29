import "./Education.css";
import {useState} from 'react';

export default function Education() {

    const [Fullerton, setFullerton] = useState(true);
    const [UCI, setUCI] = useState(true);
    const [GA, setGA] = useState(true);

    function handleUCI() {
        setGA(!GA);
        setFullerton(!Fullerton);
    }
    function handleGA() {
        setUCI(!UCI);
        setFullerton(!Fullerton);
    }
    function handleFullerton() {
        setUCI(!UCI);
        setGA(!GA);
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
                                <p>Bachelors: Applied Mathematics</p>
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
                <p className="year">2012-2017</p>
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
                        <div className="educationBlockBot">
                            <p>Coursework</p>
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">HTML / CSS</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">JavaScript</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">jQuery</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">MongoDB</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Express</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">NodeJS</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Python</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">PostgreSQL</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">React</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Bootstrap</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Django</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Git/Github</li>
                        </div>
                    </div>
                }
                <p className="year">2021</p>
            </div>
            <div className={`${Fullerton ? 'show' : 'hide'} educationFullerton`}>
                <img onClick={handleFullerton} src={`${process.env.PUBLIC_URL}/images/FullertonLogo.png`} alt="Fullerton" />
                {!GA && 
                    <div className="educationBlock">
                        <div className="educationBlockTop">
                            <div className="educationBlockNameDate">
                                <p>California State University, Fullerton</p>
                                <p>Graduated: June 2024</p>
                            </div>
                            <div className="educationBlockMajor">
                                <p>Masters: <br/>Computer Science</p>
                            </div>
                        </div>
                        <div className="educationBlockBot">
                            <p>Coursework</p>
                            <hr />
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Database Management</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">Python</li>
                            <li className="list-item m-2 col-4 btn btn-sm btn-outline-dark">C++</li>
                        </div>

                    </div>
                }
                <p className="year">2022-2024</p>
            </div>
        </div>
    )
}