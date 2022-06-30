import FadeIn from "react-fade-in";

export default function Education_Fullerton({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
            <img id="fullerton" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/FullertonLogo.png`} alt="Fullerton" />
            <div className="educationBlock">
                <div className="educationBlockTop">
                    <div className="col-6 educationBlockNameDate">
                        <p>California State University, Fullerton</p>
                        <p>Graduated: June 2024</p>
                    </div>
                    <div className="col-6 educationBlockMajor">
                        <p>Masters: <br/>Computer Science</p>
                    </div>
                </div>
                <div className="educationBlockBot">
                    <p>Coursework</p>
                    <hr />
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Database Management</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Python</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">C++</li>
                </div>

            </div>
        </FadeIn>
    )
}