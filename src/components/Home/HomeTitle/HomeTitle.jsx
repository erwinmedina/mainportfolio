import "./HomeTitle.css";
import FadeIn from "react-fade-in";
import Typist from "react-typist";

export default function HomeTitle() {
    return (
        <div className="HomeTitle">
            <div className="HomeTitle-Greet row">
                <div className="HomeTitle-Greet-LeftBox col-lg-6 col-md-12 col-sm-12">
                    <Typist cursor={{ show: false }}>
                        <div className="HomeTitle-Words">
                            <h1>Hello there & welcome!</h1>
                            <p>I'm Erwin!</p>
                            <span><p>Software Developer</p></span>
                        </div>
                    </Typist>
                    <FadeIn className="HomeTitle-LeftBox-Contact" delay={1500} transitionDuration={1000}>
                        <a href="https://www.linkedin.com/in/erwinmedina/" target="_blank">
                            <i class="devicon-linkedin-plain"></i>
                        </a>
                        <a href="https://github.com/erwinmedina" target="_blank">
                            <i class="devicon-github-original"></i>
                        </a>
                    </FadeIn>
                </div>
                <FadeIn delay={1500} transitionDuration={2000} className="col-lg-6 col-md-12 col-sm-12">
                    <div className="HomeTitle-Greet-Pictures">
                        <img src="https://i.imgur.com/llvNQ0k.jpg" alt="" />
                    </div>
                </FadeIn>

                
            </div>
        </div>
    )
}