import FadeIn from "react-fade-in";

export default function Education_GA({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
            <img id="ga" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/GALogo.png`} alt="GA" />
            <div className="educationBlock">
                <div className="educationBlockTop">
                    <div className="col-6 educationBlockNameDate">
                        <p>General Assembly</p>
                        <p>Graduated: May 2021</p>
                    </div>
                    <div className="col-6 educationBlockMajor">
                        <p>Certification: <br/>Software Engineering</p>
                    </div>
                </div>
                <div className="educationBlockBot">
                    <p>Coursework</p>
                    <hr />
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">HTML / CSS</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">JavaScript</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">jQuery</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">MongoDB</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Express</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">NodeJS</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Python</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">PostgreSQL</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">React</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Bootstrap</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Django</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Git/Github</li>
                </div>
            </div>
        </FadeIn>
    )
}