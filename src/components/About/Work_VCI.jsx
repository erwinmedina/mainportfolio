import FadeIn from "react-fade-in";

export default function Work_VCI({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
         <img id="vci" onClick={handleClick} className="workLogo" src={`${process.env.PUBLIC_URL}/images/VCILogo.jpeg`} alt="VCI" />
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
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Database Management</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Excel</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Visual Basic Scripts</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Automation</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Power BI</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Refactor</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">QA / QC</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">PM, CX, 3GIS Team</li>
                <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Reports</li>
            </div>
        </div>
        </FadeIn>
    )
}