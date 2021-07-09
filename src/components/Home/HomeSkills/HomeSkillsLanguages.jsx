import FadeIn from "react-fade-in";


export default function HomeSkillsLanguages() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i class="devicon-javascript-plain colored">
                    <span>JavaScript</span>
                </i>
                <i class="devicon-python-plain colored">
                    <span>Python</span>
                </i>
                <i class="devicon-c-plain colored">
                    <span>C Programming</span>
                </i>
            </div>
        </FadeIn>
    )
}