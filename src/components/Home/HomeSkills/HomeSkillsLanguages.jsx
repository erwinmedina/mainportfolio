import FadeIn from "react-fade-in";


export default function HomeSkillsLanguages() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i class="devicon-csharp-plain colored">
                    <span>C#</span>
                </i>
                <i class="devicon-cplusplus-plain">
                    <span>C++</span>
                </i>
                <i className="devicon-css3-plain-wordmark colored">
                    <span>CSS</span>
                </i>
                <i className="devicon-html5-plain-wordmark colored">
                    <span>HTML</span>
                </i>
                <i class="devicon-javascript-plain colored">
                    <span>JavaScript</span>
                </i>
                <i class="devicon-azuresqldatabase-plain colored">
                    <span>SQL</span>
                </i>
                <i class="devicon-python-plain colored">
                    <span>Python</span>
                </i>
            </div>
        </FadeIn>
    )
}