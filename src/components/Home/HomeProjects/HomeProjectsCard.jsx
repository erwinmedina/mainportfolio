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
            name: 'Liverpool',
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
                    <span>{project.name}</span>
                    <span>{project.skills}</span>
                    <span>{project.description}</span>
                </div>
            ))}
        </div>
    )
}