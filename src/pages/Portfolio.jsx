import React from "react";
import "../styling/Portfolio.css"
import Project from "../components/Project";
import theSocialARC from "../images/theSocialARC.png"


const Portfolio = () => {
    return(
        <>
        <div className="portfolioPage"> 
            <div className="text-panel">
                <div className="text-content">
                    
                    <p>Designer.</p>
                    <p>Writer.</p>
                    <p>Thinker.</p>
                    <p>Creative.</p>
                    <p><b>Sabrina Tang.</b></p>
                </div>
            </div>

        </ div>
        
        <div className="projectSection">
            <div className="sectionHeader">
                <div className="title"><h1>Projects</h1></div>
                <p className="description">A brief overview of various case studies and projects I've worked on.</p>
            </div>
            <div className="projects"> 
                <Project imageSrc={theSocialARC} name="The Social Arc"/>
            </div>
            <div className="projects"> 
                <Project imageSrc={theSocialARC} name="The Social Arc"/>
            </div>
            <div className="projects"> 
                <Project imageSrc={theSocialARC} name="The Social Arc"/>
            </div>
        </div>
        
        </>
    )
}

export default Portfolio;