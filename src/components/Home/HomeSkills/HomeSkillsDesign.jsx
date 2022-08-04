import FadeIn from "react-fade-in";

export default function HomeSkillsDesign() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://img.icons8.com/fluency/344/autocad.png" alt="" />
                    <span>AutoCAD</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png" alt="" />
                    <span>Illustrator</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png" alt="" />
                    <span>Photoshop</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://i.imgur.com/VkhuT3E.png" alt="" />
                    <span>Sketchup</span>
                </i>
            </div>
        </FadeIn>
    )
}