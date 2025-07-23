import React, { useState } from "react";
import "../styling/Projects.css";
import TheSocialARC from "./TSA.jsx";
import theSocialARC from "../images/theSocialARC.png";
import caretech from "../images/caretech.png";
import CareTech from "./CareTech.jsx";
import zothomes from "../images/zothomes.png";
import ZotHomes from "./ZotHomes.jsx";
import supernova from "../images/supernova.png";
import reddit from "../images/reddit.jpeg";
import RedditRedesign from "./RedditRedesign.jsx";
import ZotSpace from "./ZotSpace.jsx";
import zotspace from "../images/zotspace.png"
import Bloom from "./Bloom.jsx";
import SuperNova from "./SuperNova.jsx"
import bloom from "../images/bloom.JPG"

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
      detailsComponent: <SuperNova />,
    },
    {
      id: 5,
      name: "ZotSpace",
      role: "UI/UX Lead, Frontend Developer",
      description: "",
      tags: ["UI/UX Design", "React", "Frontend Development"],
      imageSrc: zotspace,
      detailsComponent: <ZotSpace />,
    },
    {
      id: 6,
      name: "Reddit Redesign",
      role: "UI/UX Designer",
      description: "A conceptual redesign of Reddit's interface to improve usability and modernize the user experience.",
      tags: ["UI/UX Design", "Prototyping", "Figma"],
      imageSrc: reddit,
      detailsComponent: <RedditRedesign />,
    },
    {
      id: 7,
      name: "Bloom",
      role: "Product Designer, Frontend Developer",
      description: "An IoT-enabled hydroponic system designed to automate plant care with minimal effort.",
      tags: ["Product Design", "IoT", "UX Research", "React", "Hardware Integration"],
      imageSrc: bloom,
      detailsComponent: <Bloom />,
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
