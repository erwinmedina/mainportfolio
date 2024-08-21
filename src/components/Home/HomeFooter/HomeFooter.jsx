import "./HomeFooter.css";

export default function HomeFooter() {
    return (
        <div className="footerContainer">

            <div className="nameAndMore">
                <div className="nameLogo">
                    <img className="ErwinFooter" src="https://i.imgur.com/I5Zay4v.png" alt="" />
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/erwinmedina/" target="_blank">
                        <i class="devicon-linkedin-plain"></i>
                    </a>
                    <a href="https://github.com/erwinmedina" target="_blank">
                        <i class="devicon-github-original"></i>
                    </a>
                </div>
            </div>

            <div className="contactMe">
                <span className="message">Send me a message and i'll get back to you!</span>
                <form className="formStuff">
                    <div className="leftSideFormStuff">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title/Subject of your concern..."/>
                        </div>
                        
                        <div class="form-group textAreaForm">
                            <textarea placeholder="Under construction!" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="rightSideFormStuff">
                        <button disabled type="button" class="btn btn-light">Submit!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}