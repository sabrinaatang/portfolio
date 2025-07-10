import React, { useRef } from "react";
import "../styling/Portfolio.css"
import Projects from "../components/Projects";
import backgroundVideo from "../images/backgroundVideo.mov"
import Navbar from "../components/Navbar";



const Portfolio = () => {
    const projectsRef = useRef(null);
    return(
        <>
        <div className="portfolioPage">
            <Navbar scrollTargetRef={projectsRef}/>
            <video className="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-overlay">
                    <h1>Sabrina Tang</h1>
                    <p>Designer, Researcher, Creative</p>
        </div>
        </ div>
        <div ref={projectsRef} className="projectSection">
            <div className="sectionHeader">
                <div className="title"><h1>Projects</h1></div>
                <p className="description">A brief overview of various case studies and projects I've worked on.</p>
            </div>
            <div className="projects"> 
                <Projects />
            </div>
        </div>
        
        </>
    )
}

export default Portfolio;