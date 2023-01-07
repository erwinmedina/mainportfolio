import "./HomeExperience.css";


export default function HomeExperienceCard({work, index, job, setJob}) {
    function handleButton(event) {
        let tempJob = {...job}
        if (tempJob[event.target.id]) {
            tempJob[event.target.id] = false;
        }
        else {
            for (const property in tempJob) {
                tempJob[property] = false;
            }
            tempJob[event.target.id] = true;
        }
        setJob(tempJob);
    }

    return (
        <div className="masterCard">
            <div className={`${job[index] ? 'unhidden_cardWidth':''} card`}>
                <div className="card-top">
                    <img className={`${job[index] ? 'unhidden_border' : ''} card-img-top workExpImg`} src={work.logo} alt="" />
                    <div className="HomeEducation-CardBody card-body">
                        <h5 className="card-title">{work.name}</h5>
                        <p className="card-text">
                            {work.time} <br/>
                            {work.position} <br/>
                        </p>
                    </div>
                </div>
                <div className={`${job[index] ?'unhidden_CWContainer' : ''} CWContainer`}>
                    <button id={index} onClick={handleButton} className="btn btn-primary courseworkButton">Description</button>
                </div>
            </div>
            <div className={job[index] ? 'unhidden2' : 'hidden2'}>
                {work.description.map((jobby,index) => (
                    <div className="Description">
                        <div className="btn btn-sm btn-outline-dark">
                            {jobby}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}