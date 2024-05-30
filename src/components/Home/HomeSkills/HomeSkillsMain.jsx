import FadeIn from "react-fade-in";


export default function HomeSkillsMain() {
    return (
            <FadeIn transitionDuration={1500}>
                <div className="icon-size">
                        <i className="devicon-react-original">
                            <span>React JS</span>
                        </i>
                        <i class="devicon-nextjs-plain colored">
                            <span>Next JS</span>
                        </i>
                        <i className="devicon-bootstrap-plain colored">
                            <span>Bootstrap</span>
                        </i>
                        <i class="devicon-tailwindcss-original">
                            <span>Tailwind</span>
                        </i>
                        <i class="devicon-django-plain">
                            <span>Django</span>
                        </i>
                        <i class="devicon-flask-original colored">
                            <span>Flask</span>
                        </i>
                        <i class="devicon-mysql-original colored">
                            <span>MySQL</span>
                        </i>
                        <i className="devicon-mongodb-plain colored">
                            <span>MongoDB</span>
                        </i>
                        <i class="devicon-supabase-plain colored">
                            <span>Supabase</span>
                        </i>
                        <i class="devicon-redis-plain colored">
                            <span>Redis</span>
                        </i>
                        <i className="devicon-github-original">
                            <span>Github</span>
                        </i>
                        <i className="devicon-git-plain colored">
                            <span>Git</span>
                        </i>
                </div>
            </FadeIn>
    )
}