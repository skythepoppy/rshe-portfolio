import React, { useState } from "react";
import "./Projects.css";
import logo from './assets/Raphael_Evangelista.png';
import { Link } from 'react-router-dom';
import {
    weather,
    weatherapi,
    foodmenu,
    pypackage,
    todotask,
    todoweb,
    library1,
    library2,
    vaip
} from './assets';


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Weather Dashboard",
            image: weather,
            description: "A brief description of the project. Technologies used: HTML, CSS, React",
            link: "https://github.com/yourname/project1"
        }
        ,
        {
            id: 2,
            title: "Weather API",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 3,
            title: "Vehicular AI Presets",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 4,
            title: "Modern Forge",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 5,
            title: "To-Do Web App",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 6,
            title: "User Blog App",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 7,
            title: "Book Library Database",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
        ,
        {
            id: 8,
            title: "User Blog App",
            image: "/path-to-project-image.jpg",
            description: "Description of this project. Technologies: Node.js, Express, MongoDB",
            link: "https://github.com/yourname/project2"
        }
    ];

    return (
        <div className="works-container">
            <img
                src={logo}
                alt="My Logo"
                className="logo"
            />
            <nav>
                <Link to="/home">Home</Link> /
                <Link to="/my-works">My Work</Link> /
                <a href="#resume"> Resume </a> /
                <a href="#contact"> Contact</a>
            </nav>

            <header>
                <h1>My Works</h1>
                <p>Some of my projects, experiments, and contributions.</p>
            </header>

            <section className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
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
                    >
                        <h2>{selectedProject.title}</h2>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                        />
                        <p>{selectedProject.description}</p>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                        <button onClick={() => setSelectedProject(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
