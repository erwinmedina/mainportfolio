import FadeIn from "react-fade-in";

export default function Work_Revel({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
            <img id="revel" onClick={handleClick} className="workLogo" src={`${process.env.PUBLIC_URL}/images/RevelLogo.jpeg`} alt="revel" />
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
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">XML/CSV Data</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Visual Basic</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Excel</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Helioscope</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">SketchUp / AutoCAD</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Communication</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Negotiation</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Data Analysis</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Design</li>
                </div>
            </div>
        </FadeIn>
    )
}