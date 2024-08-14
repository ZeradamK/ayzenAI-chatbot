import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import LandingPage from "../LandingPage/LandingPage";
import PromptSection from "../PromptSection/PromptSection";
import AboutSection from "../AboutSection/AboutSection";
import BaseFooter from "../BaseFooter/BaseFooter";
import Footer from "../Footer/Footer"
import '../../App.css';
import './Home.css'
import promptsData from '../PromptSection/prompts.json'
const Home =()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);
    return(
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <div className={"bg-section"}>
                <section className={"section-bg1"}/>
                <section className={"section-bg2"}/>
                <section className={"section-bg3"}/>
                <section className={"section-bg4"}/>
            </div>
            <Header className={"header z-30"} toggleTheme={toggleTheme} />
            <LandingPage className={"z-30"}/>
            <PromptSection prompts={promptsData.prompts}/>
            <AboutSection toggleTheme={toggleTheme}/>
            <Footer/>
            <BaseFooter/>
        </div>
    )
}

export default Home;