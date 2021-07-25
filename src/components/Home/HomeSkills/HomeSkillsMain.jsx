import FadeIn from "react-fade-in";


export default function HomeSkillsMain() {
    return (
            <FadeIn transitionDuration={1500}>
                <div className="icon-size">
                        <i className="devicon-html5-plain-wordmark colored">
                            <span>HTML</span>
                        </i>
                        <i className="devicon-css3-plain-wordmark colored">
                            <span>CSS</span>
                        </i>
                        <i className="devicon-bootstrap-plain colored">
                            <span>Bootstrap</span>
                        </i>
                        <i className="devicon-javascript-plain colored">
                            <span>JavaScript</span>
                        </i>

                        <i className="devicon-mongodb-plain colored">
                            <span>MongoDB</span>
                        </i>
                        <i className="devicon-express-original colored">
                            <span>Express</span>
                        </i>
                        <i className="devicon-react-original colored">
                            <span>React</span>
                        </i>
                        <i className="devicon-nodejs-plain colored">
                            <span>Node</span>
                        </i>
                        <i className="devicon-python-plain colored">
                            <span>Python</span>
                        </i>
                        <i className="devicon-c-plain colored">
                            <span>C</span>
                        </i>
                        <i className="devicon-heroku-original colored">
                            <span>Heroku</span>
                        </i>
                        <i className="devicon-github-original">
                            <span>Github</span>
                        </i>
                </div>
            </FadeIn>
    )
}