import "./App.css";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <ul>
          <li>Charts</li>
          <li>Documentation</li>
          <li>Calendar</li>
        </ul>
      </div>


      {/* Main content */}
      <main className="content">
        <h1>Hello, I’m Raphael 👋</h1>
        <p>Aspiring Software Engineer | Building my portfolio</p>
        <nav>
          <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </nav>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/yourname/project1">Project 1</a></li>
            <li><a href="https://github.com/yourname/project2">Project 2</a></li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: youremail@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourname">linkedin.com/in/yourname</a></p>
        </section>
      </main>
    </div>
  );
}
