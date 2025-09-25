import "./App.css";
import logo from './assets/Raphael_Evangelista.png';
import myPhoto from './assets/me.jpg';

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
          <a href="#projects">Home </a> / <a href="#projects"> My Work </a> /
          <a href="#resume"> Resume </a> / <a href="#contact"> Contact</a>
        </nav>

        <section className="about">
          <img src={myPhoto} alt="Raphael Evangelista" className="about-photo" />
          <div className="about-text">
            <h2>Raphael Evangelista</h2>
            <p>
              Hi, I’m Raphael! I’m an aspiring software engineer passionate about building
              meaningful applications. I enjoy working with like-minded people and aim to grow
              into a development role and eventually a managerial position with a tight-knit team.
            </p>
          </div>
        </section>

        <nav/>

        <section id="content">
          <h1>Contact</h1>
          
        </section>
      </main>
    </div>
  );
}
