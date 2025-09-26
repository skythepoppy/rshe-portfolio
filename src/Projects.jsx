import React, { useState } from "react";
import "./Projects.css";
import logo from "./assets/Raphael_Evangelista.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "./projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="works-container">
      <img src={logo} alt="My Logo" className="logo" />

      <nav>
        <Link to="/home">Home</Link> /
        <Link to="/my-works">My Work</Link> /
         <Link to="/contact">Contact</Link>
      </nav>

      <header>
        <h1>My Works</h1>
        <p>Some of my projects, experiments, and contributions.</p>
        <p style={{ fontStyle: 'bold' }}>View the rest here: <a
          href="https://github.com/skythepoppy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="black"/>
        </a> </p>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image[0]} alt={project.title} />
            <h3>{project.title}</h3>
            {/* Tags */}
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Modal popup */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }} // allow absolute positioning for icon
          >
            {/* Close arrow icon */}
            <FaArrowLeft
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "50px",
                left: "20px",
                cursor: "pointer",
                color: "#fff2ec",
                fontSize: "1.5rem",
              }}
            />

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-images">
              {selectedProject.image.map((img, index) => (
                <img key={index} src={img} alt={`${selectedProject.title} screenshot ${index + 1}`} />
              ))}
            </div>

            <p style={{ whiteSpace: "pre-line" }}>{selectedProject.about}</p>
            {/* Tags in modal */}
            <h3>Technologies: </h3>
            <div className="tags">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <br />
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
