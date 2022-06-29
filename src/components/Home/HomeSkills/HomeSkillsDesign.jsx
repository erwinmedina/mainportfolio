import FadeIn from "react-fade-in";

export default function HomeSkillsDesign() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png" alt="" />
                    <span>Illustrator</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png" alt="" />
                    <span>Photoshop</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://cdn-icons.flaticon.com/png/512/5768/premium/5768781.png?token=exp=1656529587~hmac=142ed87418ae855d5c675c5286c3d9ad" alt="" />
                    <span>AutoCAD</span>
                </i>
            </div>
        </FadeIn>
    )
}