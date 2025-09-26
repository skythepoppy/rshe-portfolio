import React from "react";
import "./Projects.css";
import logo from './assets/Raphael_Evangelista.png';
import { Link } from 'react-router-dom';

export default function Projects() {
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
                <a href="#resume"> Resume </a> / <a href="#contact"> Contact</a>
            </nav>
            <header>
                <h1>My Works</h1>
                <p>Some of my projects, experiments, and contributions.</p>
            </header>

            <section className="projects-grid">

                <div className="project-card">
                    <img src="/path-to-project-image.jpg" alt="Project 1" />
                    <h3>Project 1</h3>
                    <p>
                        A brief description of the project. Technologies used: HTML, CSS, React
                    </p>
                    <a
                        href="https://github.com/yourname/project1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>

                <div className="project-card">
                    <img src="/path-to-project-image.jpg" alt="Project 2" />
                    <h3>Project 2</h3>
                    <p>
                        Description of this project. Technologies: Node.js, Express, MongoDB
                    </p>
                    <a
                        href="https://github.com/yourname/project2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>

                {/* Add more project cards here */}
            </section>
        </div>
    );
}
