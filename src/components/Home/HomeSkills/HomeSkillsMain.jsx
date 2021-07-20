import FadeIn from "react-fade-in";


export default function HomeSkillsMain() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i class="devicon-html5-plain-wordmark colored">
                    <span>HTML</span>
                </i>
                <i class="devicon-css3-plain-wordmark colored">
                    <span>CSS</span>
                </i>
                <i class="devicon-bootstrap-plain colored">
                    <span>Bootstrap</span>
                </i>
                <i class="devicon-javascript-plain colored">
                    <span>JavaScript</span>
                </i>
                <i class="devicon-mongodb-plain colored">
                    <span>MongoDB</span>
                </i>
                <i class="devicon-express-original colored">
                    <span>Express</span>
                </i>
                <i class="devicon-react-original colored">
                    <span>React</span>
                </i>
                <i class="devicon-nodejs-plain colored">
                    <span>Node</span>
                </i>
                <i class="devicon-python-plain colored">
                    <span>Python</span>
                </i>
                <i class="devicon-c-plain colored">
                    <span>C</span>
                </i>
                <i class="devicon-heroku-original colored">
                    <span>Heroku</span>
                </i>
                <i class="devicon-github-original">
                    <span>Github</span>
                </i>
            </div>
        </FadeIn>
    )
}