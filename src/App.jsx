import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./App.css";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>

      
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Hello, I’m Raphael 👋</h1>
        <p>Aspiring Software Engineer | Building my portfolio</p>
        <nav>
          <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </nav>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/yourname/project1">Project 1</a>
            </li>
            <li>
              <a href="https://github.com/yourname/project2">Project 2</a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: youremail@example.com</p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourname">
              linkedin.com/in/yourname
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
