import "./HomeProjectsCard.css";

export default function HomeProjectsCard() {
    let projects = [
        {
            name: 'Mancala',
            skills: ['HTML', 'CSS/Bootstrap', 'JavaScript', 'jQuery'],
            description: 'Event driven, first project. I love the win/loss logic!',
            image: 'https://erwinmedina.github.io/portfolio/images/Mancala.png'
        },
        {
            name: 'Liverpool Cafe',
            skills: ['HTML', 'CSS/Bootstrap', 'JavaScript', 'jQuery'],
            description: 'Event driven, first project. I love the win/loss logic!',
            image: 'https://erwinmedina.github.io/portfolio/images/Liverpool.png'
        }
    ]

    return (
        <div className="HomeProjectsCard">
            {projects.map(project => (
                <div className="HomeProjectsCard-Container">
                    <img src={project.image} alt="" />
                    <span className="HomeProjectsCard-Title">{project.name}</span>
                    <div className="HomeProjectsCard-SkillsContainer">
                        {project.skills.map(skill => (
                            <span className="btn btn-light HomeProjectsCard-Skills">{skill}</span>
                        ))}
                    </div>
                    <span className="HomeProjectsCard-Description">{project.description}</span>
                </div>
            ))}
        </div>
    )
}