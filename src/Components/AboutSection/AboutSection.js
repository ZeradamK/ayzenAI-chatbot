import React, {useRef} from 'react'
import './AboutSection.css'
import gemini from '../../Icons/Gemini.png';
import gpt from '../../../src/Icons/ChatGPT.png';
import blackbox from '../../Icons/Blackbox-Logo.png';
import bing from '../../../src/Icons/bing.png';
import ayzen from '../../Icons/ayzen-logo.png';
import { BiSolidEdit } from "react-icons/bi";
import { BsWindowSidebar } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const AboutSection =({ toggleTheme })=>{
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        const { left, top, width, height } = container.getBoundingClientRect();
        const mouseX = e.clientX - left - width / 2;
        const mouseY = e.clientY - top - height / 2;

        const icons = container.querySelectorAll('img');
        icons.forEach((icon) => {
            const offsetX = (icon.getBoundingClientRect().left + icon.clientWidth / 2 - left - width / 2) / width;
            const offsetY = (icon.getBoundingClientRect().top + icon.clientHeight / 2 - top - height / 2) / height;
            icon.style.transform = `translate(${mouseX * offsetX}px, ${mouseY * offsetY}px)`;
        });
    };
    return(
        <div className={"about-section text-center"}>
            <div className={"Title"}>
                <h1 className={"ayzen-intro"}>Get started with Ayzen AI</h1>
            </div>
            <div className={"Description"}>
                <p className={"about-desc"}>
                    Powerful AI tools for students, faculty, researchers, and campus administrators
                </p>
            </div>
            <div className={"tools mt-10 flex flex-col justify-center gap-x-0"}>
                <div className={"tools-div flex flex-col mt-10 mb-20"}>
                    <div className={"tools-icons mr-10 mt-10 mb-10 justify-between align-middle"}>
                        <div className={"tools-row1"}>
                            <div className={"floating1"}>
                                <img className={"gpt-icon"} src={gpt} alt={"chat-gpt"}/>
                            </div>
                            <div className={"floating2"}>
                                <img className={"bing-icon mt-20 ml-5"} src={bing} alt={"bing"}/>
                            </div>
                        </div>
                        <div className={"tools-row2 floating2 -mr-5"}>
                                <img className={"ayzen-logo"} src={ayzen} alt={"aizen"}/>
                        </div>
                        <div className={"tools-row3"}>
                            <div className={"floating1"}>
                                <img className={"gemini"} src={gemini} alt={"gemini"}/>
                            </div>
                            <div className={"floating2"}>
                                <img className={"blackbox mt-32 ml-5"} src={blackbox} alt={"blackbox"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tools-text-section flex flex-row text-center"}>
                        <div className={"tools-title"}>
                            <h1 className={"tools-title-text"}>Multiple Data Source</h1>
                        </div>
                        <div className={"tools-content"}>
                            <p className={"tool-desc"}>Can be trained by multiple sources like websites, help center or text documents. Update your data sources at any time.</p>
                        </div>
                    </div>
                </div>
                <div className={"application-div bg-transparent mb-20"}>
                    <div className={"tools-title mt-36"}>
                        <h1 className={"application-title-text"}>Its a complete chatbot.</h1>
                    </div>
                    <div className={"application-ui items-start justify-center"}>
                        <div className="main-content grid items-center justify-center gap-y-5">
                            <div className="main-content-ayzen-text mb-2">
                                <h1 className="main-content-ayzen-text">AYZEN</h1>
                            </div>
                            <div className="main-content-features items-center justify-between mt-2 ">
                                <div className="contents-list flex flex-row justify-center -gap-x-5">
                                    <div className="examples flex flex-col items-center ">
                                        <FiSun className="sun text-white text-2xl mb-3"/>
                                        <h1 className="examples-text text-white mb-5">Examples</h1>
                                        <div className={"examples-cards"}>
                                            <div className={"cards example-card1"}>
                                                <p>"What’s the weather like today?"</p>
                                            </div>
                                            <div className={"cards example-card2"}>
                                                <p>"Can you help me write a cover letter for a job application?"</p>
                                            </div>
                                            <div className={"cards example-card3"}>
                                                <p>"What are some healthy meal ideas for a week?"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="capabilities flex flex-col items-center">
                                        <BsLightningCharge className="lighting text-white text-2xl mb-3"/>
                                        <h1 className="capabilities-text text-white mb-5">Capabilities</h1>
                                        <div className={"lighting-cards"}>
                                            <div className={"cards example-card1"}>
                                                <p>"I can provide detailed answers to a wide range of questions"</p>
                                            </div>
                                            <div className={"cards example-card2"}>
                                                <p>"I can help you write, debug, and understand code"</p>
                                            </div>
                                            <div className={"cards example-card3"}>
                                                <p>"I can brainstorm ideas for projects, content, or solutions."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="limitations flex flex-col items-center">
                                        <IoWarningOutline className="warning text-white text-2xl mb-3"/>
                                        <h1 className="limitations-text text-white mb-5">Limitations</h1>
                                        <div className={"limitations-cards"}>
                                            <div className={"cards example-card1"}>
                                                <p>"I don't have access to the internet in real-time."</p>
                                            </div>
                                            <div className={"cards example-card2"}>
                                                <p>"I don't have personal experiences, emotions, or consciousness."</p>
                                            </div>
                                            <div className={"cards example-card3"}>
                                                <p>"I might struggle with understanding context-dependent language."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"main-content-input mb-8"}>
                                <input type={"text"} className={"p-5 main-chat-input pl-10 ml-7 text-white"} placeholder={"Message AYZEN"}/>
                                <IoSend className={"send-icon"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default AboutSection;