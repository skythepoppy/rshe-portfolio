import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./index.css";
import  App  from "./App.jsx";       
import  Projects  from "./Projects.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />          
        <Route path="/my-works" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
