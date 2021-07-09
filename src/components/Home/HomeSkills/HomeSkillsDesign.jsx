import FadeIn from "react-fade-in";

export default function HomeSkillsDesign() {
    return (
        <FadeIn transitionDuration={1500}>
            <div class="icon-size">
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://image.flaticon.com/icons/png/512/688/688064.png" alt="" />
                    <span>Illustrator</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://image.flaticon.com/icons/png/512/688/688062.png" alt="" />
                    <span>Photoshop</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://image.flaticon.com/icons/png/512/688/688065.png" alt="" />
                    <span>InDesign</span>
                </i>
                <i className="HomeSkillsOffice-Icon">
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/ec/AutoCAD_2018_icon.png" alt="" />
                    <span>AutoCAD</span>
                </i>
            </div>
        </FadeIn>
    )
}