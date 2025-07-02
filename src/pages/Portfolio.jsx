import React from "react";
import "../styling/Portfolio.css"
import Projects from "../components/Projects";
import Spline from "@splinetool/react-spline";




const Portfolio = () => {
    return(
        <>
        <div className="portfolioPage">
        <Spline scene="https://prod.spline.design/UWHn6oLEv7KLrR3O/scene.splinecode" />
        </ div>
        <div className="projectSection">
            <div className="sectionHeader">
                <div className="title">Projects</div>
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