import "./App.css";
import logo from './assets/Raphael_Evangelista.png';
import myPhoto from './assets/me.jpg';
import hackutd from './assets/VAIP2.jpg';
import aggiehack from './assets/EE.jpg';
import { FaLaptopCode, FaUserFriends, FaCode } from "react-icons/fa";
import {Link} from 'react-router-dom';


export default function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Main content */}
      <main className="content">
        <img
          src={logo}
          alt="My Logo"
          className="logo"
        />
        <nav>
          <Link to="/home">Home</Link> /
          <Link to="/my-works">My Work</Link> /
          <Link to="/contact">Contact</Link>
        </nav>

        <section className="about">
          <img src={myPhoto} alt="Raphael Evangelista" className="about-photo" />
          <div className="about-text">
            <h2>Raphael Evangelista</h2>
            <p>
              Hello World, I am Raphael!I am a computer science major and aspiring developer. It's my fundamental
              believe that as one learns, one is not just a student then, but for life. I am passionate about building
              meaningful applications and enjoy working with like-minded people in a collaborative environment.
            </p>
          </div>
        </section>

        <nav />

        <section className="skills">
          <div className="card">
            <FaCode className="card-icon" />
            <h3>Front-End</h3>
            <p>I like to experiment and code things from scratch with an emphasis on functionality
              , in order to bring ideas to life on the browser.</p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Things I enjoy designing:
              </span>
              <br />
              Web Apps, Landing Pages, Dashboards, UI, Responsive Layouts
            </p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Dev Tools:
              </span>
              <br />
              HTML/CSS, Javascript, React, TailwindCSS, Bootstrap, Context APIs, Hooks,
            </p>
          </div>

          <div className="card">
            <FaLaptopCode className="card-icon" />
            <h3>Back-End</h3>
            <p>
              I enjoy creating server-side applications, working with databases, APIs, and understanding server logic.
            </p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Things I enjoy building:
              </span>
              <br />
              RESTful APIs, Authentication Systems, Database Schemas, Server-Side Logic
            </p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Dev Tools:
              </span>
              <br />
              Python, Javascript, Java, Node.js/Express, Django/Flask, Springboot, MySQL, PostgreSQL, SQLite, Git, Postman, JWT
            </p>
          </div>

          <div className="card">
            <FaUserFriends className="card-icon" />
            <h3>Mentor</h3>
            <p>I enjoy making sure that I connect difficult concepts to students in a way that they can relate
              and understand.
            </p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Experiences I draw from:
              </span>
              <br />
              Remote/In-Person Mathematics and Programming Tutor (with Varsity Tutors and Club Z! Tutoring)
            </p>
            <p>
              <span style={{ color: '#d26640', fontWeight: 'bold' }}>
                Mentor Stats:
              </span>
              <br />
              3+ years tutoring experience, 4+ stars on Varsity Tutors, 5+ stars on Club Z! Tutoring, 35+ students, 960+ Tutoring Hours
            </p>
          </div>
        </section>

        <nav />

        <section className="hackathons">
          <div className="hackathon-text">
            <h3>Collaboration</h3>
            <p>
              One of my favorite instances of collaborative teamwork amidst like-minded individuals were the hackathons I attended.
            </p>
          </div>

          <div className="hackathon-cards">
            <div className="card">
              <h3 style={{ color: '#d26640', fontWeight: 'bold' }}>HackUTD</h3>
              <img src={hackutd} alt="hackutd" className="hackathon-photo" />
              <p>
                I had a great time at the 48 hour HACKUTD. As a team, we were able to complete our project
                "Vehicular AI Presets" under the sponsor company Toyota. This project was presented to Toyota,
                Statefarm, and CBRE.
              </p>
              <p>
                <span style={{ color: '#d26640', fontWeight: 'bold' }}>Project:</span>
                <a href="https://github.com/aerongcanlas/hack-utd-2022" style={{ fontWeight: 'bold' }}> Vehicular AI Presets</a>
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: '#d26640', fontWeight: 'bold' }}>Aggies Invent</h3>
              <img src={aggiehack} alt="aggiehack" className="hackathon-photo" />
              <p>
                The first hackathon I attended was the A&M Engineering Entrepreneurship Hackathon, where the
                theme was SOCOM (Special Operations Command). I worked with a team wherein we developed
                a prototype reconnaissance land-drone (fitted with 4 dc motors, front and rear motion sensors
                and an imaging sensor)
              </p>
              <p>
                <span style={{ color: '#d26640', fontWeight: 'bold' }}>Project:</span>
                <a href="https://www.youtube.com/watch?v=cFUjKcirdDk"
                  style={{ fontWeight: 'bold' }}
                  target="_blank"
                  rel="noopener noreferrer"> Hackathon Presentations (2:08:36)</a>
              </p>
            </div>
          </div>
        </section>






      </main>
    </div>
  );
}
