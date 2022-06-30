import FadeIn from "react-fade-in";

export default function Work_Knox({handleClick}) {
    return (
        <FadeIn transitionDuration={1500}>
            <img id="knox" onClick={handleClick} className="show workLogo" src={`${process.env.PUBLIC_URL}/images/KnoxLogo.png`} alt="knox" />
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
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Data Entry</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Quality Control</li>
                    <li className="col-12 col-lg-3 m-0 m-lg-2 mt-2 btn btn-sm btn-outline-dark">Team Communication</li>
                </div>
            </div>
        </FadeIn>
    )
}