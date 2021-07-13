import "./HomeTitle.css";
import FadeIn from "react-fade-in";
import fadeIn from "react-animations/lib/fade-in";
import Typist from "react-typist";

export default function HomeTitle() {
    return (
        <div className="HomeTitle">
            <div className="HomeTitle-Greet">
                <div className="HomeTitle-Greet-LeftBox">
                    <Typist cursor={{ show: false }}>
                        <div className="HomeTitle-Words">
                            <h1>Hello there & welcome!</h1>
                            <p>I'm Erwin!</p>
                            <span><p>Full-Stack Developer | Software Engineer</p></span>
                        </div>
                    </Typist>
                    <FadeIn className="HomeTitle-LeftBox-Contact" delay={2000} transitionDuration={3000}>
                        <a href="https://www.linkedin.com/in/erwinmedina/" target="_blank">
                            <i class="devicon-linkedin-plain"></i>
                        </a>
                        <a href="https://github.com/erwinmedina" target="_blank">
                            <i class="devicon-github-original"></i>
                        </a>
                    </FadeIn>
                </div>
                <FadeIn delay={2000} transitionDuration={3000}>
                    <div className="HomeTitle-Greet-Pictures">
                        <img src="https://i.imgur.com/llvNQ0k.jpg" alt="" />
                    </div>
                </FadeIn>

                
            </div>
        </div>
    )
}