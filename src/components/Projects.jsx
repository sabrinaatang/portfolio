import React, { useState } from "react";
import "../styling/Projects.css";
import TheSocialARC from "./TSA.jsx";
import theSocialARC from "../images/theSocialARC.png"
import caretech from "../images/caretech.png";
import CareTech from "./CareTech.jsx";

function Projects() {
    const projects = [
        {
            id: 1,
            name: "CareTech",
            imageSrc: caretech,
            detailsComponent: <CareTech />
        },
        {
            id: 2,
            name: "TheSocialARC",
            imageSrc: theSocialARC,
            detailsComponent: <TheSocialARC />
        },
        
        
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const showProjectDetails = (project) => {
        setSelectedProject(project); // Set the selected project object
    };

    const closeOverlay = () => {
        setSelectedProject(null); // Reset the selected project
    };

    return (
        <>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="project"
                    onClick={() => showProjectDetails(project)}
                >
                    <div className="image">
                        <img src={project.imageSrc} alt={project.name} />
                    </div>
                    <div className="profile">
                        <h1>{project.name}</h1>
                    </div>
                </div>
            ))}
            {selectedProject && (
                <>
                    <div className="overlay-background" onClick={closeOverlay}></div>
                    <div className="overlay-container">
                        <button className="close-button" onClick={closeOverlay}>×</button>
                        <div className="overlay-content">
                            {selectedProject.detailsComponent}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Projects;