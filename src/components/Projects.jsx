import React, { useState } from "react";
import "../styling/Projects.css";
import TheSocialARC from "./TSA.jsx";
import theSocialARC from "../images/theSocialARC.png";
import caretech from "../images/caretech.png";
import CareTech from "./CareTech.jsx";
import zothomes from "../images/zothomes.png";
import ZotHomes from "./ZotHomes.jsx";
import supernova from "../images/supernova.png";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "CareTech",
      role: "Lead Product Designer, Lead Full-Stack Engineer",
      description: "Designing an all-in-one healthcare solution",
      tags: ["Product Design", "UX Research"],
      imageSrc: caretech,
      detailsComponent: <CareTech />,
    },
    {
      id: 2,
      name: "TheSocialARC",
      role: "UX Researcher, UI/UX + Product Designer",
      description: "Social platform empowering student communities.",
      tags: ["Product Design", "UX Research"],
      imageSrc: theSocialARC,
      detailsComponent: <TheSocialARC />,
    },
    {
      id: 3,
      name: "ZotHomes",
      role: "Product Designer, Full-Stack Developer",
      description: "Marketplace for student housing rentals.",
      tags: ["UX Research", "UI/UX Design", "Prototyping"],
      imageSrc: zothomes,
      detailsComponent: <ZotHomes />,
    },
    {
      id: 4,
      name: "SuperNova Academy Inc.",
      role: "Product Designer, Full-Stack Developer",
      description: "E-learning platform for medical professionals and students.",
      tags: ["UI Design", "Full-Stack Development"],
      imageSrc: supernova,
      detailsComponent: null,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const showProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="project"
          onClick={() => showProjectDetails(project)}
        >
          <div className="project-image">
            <img src={project.imageSrc} alt={project.name} />
          </div>
          <div className="project-info">
            {project.role && (
              <p className="project-role">{project.role}</p>
            )}
            <h2 className="project-title">{project.name}</h2>
            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            <button className="project-button">View Project →</button>
          </div>
        </div>
      ))}

      {selectedProject && (
        <>
          <div
            className="overlay-background"
            onClick={closeOverlay}
          ></div>
          <div className="overlay-container">
            <button
              className="close-button"
              onClick={closeOverlay}
            >
              ×
            </button>
            <div className="overlay-content">
              {selectedProject.detailsComponent ? (
                selectedProject.detailsComponent
              ) : (
                <p style={{ padding: "2rem" }}>
                  No project details available.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
