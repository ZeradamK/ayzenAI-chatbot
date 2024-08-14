import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
import './LandingPage.css';
import { Link } from 'react-router-dom';
const LandingPage =()=>{
    return (
        <div className={"Main-Section"}>
            <div className={"Text-Section text-center sm:mt-8 md:mt-12"}>
                <div className={"Title"}>
                    <h1 className={"ayzen-text"}>AYZEN</h1>
                </div>
                <div className={"Intro-div"}>
                    <h1 className={"intro-text"}>
                        Explore through the knowledge of your soul with AYZEN-AI.
                    </h1>
                </div>
                <div className={"desc-text-div"}>
                    <p className={"intro-desc"}>"Simple to start. Effortless to use. Let AYZEN assist with writing, learning, brainstorming, and beyond."</p>
                </div>
                <div className="button-content">
                    <Link className={"flex-row"} to="/register">
                        Start now
                        <span className="arrow flex-row"><HiArrowUpRight/></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default LandingPage;