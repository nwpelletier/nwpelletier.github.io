import React, { useState, useContext } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import projectsData from "../data/projectsData.json";
import WhisperAds from "./projects/WhisperAds";
import "./NewProjects.css";

const NewProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isMobile } = useContext(ScreenSizeContext);
  const projects = [
    "EDU-VRAI",
    "CERASP Website",
    "Game Map Generator",
    "WhisperAds",
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="page-container">
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`project-title ${idx === selectedIndex ? `active` : ""}`}
            onClick={() => handleSelect(idx)}
          >
            {project}
          </div>
        ))}
      </div>

      <div className="projects-container">
        {selectedIndex == 0 && <WhisperAds />}
      </div>
    </div>
  );
};

export default NewProjects;
