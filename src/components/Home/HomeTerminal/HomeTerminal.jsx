import { useState } from 'react';
import Typist from "react-typist";
import PDF from "../HomeTerminal/Resume.pdf"
import "./HomeTerminal.css";


export default function HomeTerminal() {

    return (
        <div className=" HomeTerminal">
            <div class="fade-in aboutMe">
                <div class="topTerminal">
                    <div class="circle" id="red"></div>
                    <div class="circle" id="orange"></div>
                    <div class="circle" id="green"></div>
                    <span>Erwin Medina's Background -- Bash</span>
                </div>
                <div class="terminal">
                    <div>
                        <span class="first">{'>'} Erwin.currentLocation</span><br/>
                        <span>"Irvine, CA"</span>
                    </div>
                    <div>
                        <br/><span class="first">{'>'} Erwin.contactInfo</span><br/>
                        {/* ["<a href=`mailto:&#101;&#114;&#119;&#105;&#110;&#46;&#108;&#46;&#109;&#101;&#100;&#105;&#110;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;` target="_blank">erwin.l.medina@gmail.com</a>",  */}
                            ["<a href="https://www.linkedin.com/in/erwinmedina/" target="_blank">LinkedIn</a>", 
                            "<a href="https://github.com/erwinmedina" target="_blank">Github</a>", "909-503-2834"]
                    </div>
                    <div>
                        <br/><span class="first">{'>'} Erwin.education[0]</span><br/>
                        {'{'} <br/>&nbsp;&nbsp;"Name": "Software Developer", <br/>
                        &nbsp;&nbsp;"Institution": "General Assembly", <br/>
                        &nbsp;&nbsp;"Graduation": 2021 <br/>
                         {'}'}
                    </div>
                    <div>
                        <br/><span class="first">{'>'} Erwin.education[1]</span><br/>
                        {'{'} <br/>&nbsp;&nbsp;"Name": "Applied Mathematics", <br/>
                        &nbsp;&nbsp;"Institution": "UC Irvine", <br/>
                        &nbsp;&nbsp;"Graduation": 2017 <br/>
                         {'}'}
                    </div>
                    
                    <div>
                        <Typist>
                            <br/><span className="first">{'>'} Erwin.resume</span><br/>
                            "<a href={PDF} target="_blank">ErwinMedinaResume.pdf</a>"
                        </Typist>

                    </div>
                    <div>
                        <br/><span class="first"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

