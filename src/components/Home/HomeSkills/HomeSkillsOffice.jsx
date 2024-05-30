import FadeIn from "react-fade-in";
import "./HomeSkillsOffice.css";

export default function HomeSkillsOffice() {
    return (
        <FadeIn transitionDuration={1500}>
            <div className="icon-size">
                
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888835.png" alt="" />
                    <span>Adobe</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
                    <span>Google Suite</span>
                </i>
                
                <i class="devicon-jira-plain">
                    <span>Jira</span>
                </i>
          
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888867.png" alt="" />
                    <span>Office Suite</span>
                </i>
                <i className="devicon-apple-original">
                    <span>OSX</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732223.png" alt="" />
                    <span>Outlook</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732252.png" alt="" />
                    <span>Trello</span>
                </i>
                <i className="devicon-visualstudio-plain colored">
                    <span>VS Code</span>
                </i>
                <i className="devicon-windows8-original colored">
                    <span>Windows</span>
                </i>

            </div>
        </FadeIn>
    )
}