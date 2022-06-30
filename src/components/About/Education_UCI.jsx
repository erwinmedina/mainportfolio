import FadeIn from "react-fade-in";

export default function Education_UCI({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
            <img id="uci" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/UCILogo.png`} alt="UCI" />
            <div className="educationBlock">
                <div className="educationBlockTop">
                    <div className="col-6 educationBlockNameDate">
                        <p>University of California Irvine</p>
                        <p>Graduated: June 2017</p>
                    </div>
                    <div className="col-6 educationBlockMajor">
                        <p>Bachelors: Applied Mathematics</p>
                        <p>Minor: Earth System Science</p>
                    </div>
                </div>
                <div className="educationBlockBot">
                    <p>Coursework</p>
                    <hr />
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Single Variable Calculus</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Multivariable Calculus</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Linear Algebra</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Abstract Mathematics</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Numerical Analysis</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Differential Equations</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Partial Differential Equations</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Abstract Algebra</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Group Theory</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Data Modeling</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Probability</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Elementary Analysis</li>
                </div>
            </div>
        </FadeIn>
    )
}