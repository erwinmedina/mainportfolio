import FadeIn from "react-fade-in";


export default function HomeSkillsMain() {
    return (
            <FadeIn transitionDuration={1500}>
                <div className="icon-size">
                        <i className="devicon-bootstrap-plain colored">
                            <span>Bootstrap</span>
                        </i>
                        <i className="devicon-express-original colored">
                            <span>Express</span>
                        </i>
                        <i className="devicon-git-plain colored">
                            <span>Git</span>
                        </i>
                        <i className="devicon-github-original">
                            <span>Github</span>
                        </i>
                        <i className="devicon-heroku-original colored">
                            <span>Heroku</span>
                        </i>
                        <i className="devicon-mongodb-plain colored">
                            <span>MongoDB</span>
                        </i>
                        <i className="devicon-nodejs-plain colored">
                            <span>Node</span>
                        </i>
                        <i className="devicon-react-original">
                            <span>React</span>
                        </i>
                </div>
            </FadeIn>
    )
}