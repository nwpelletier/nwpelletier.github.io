import React, { useState, useContext } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import EduVrai from "./projects/EduVrai";
import CeraspWebsite from "./projects/CeraspWebsite";
import GameMapGenerator from "./projects/GameMapGenerator";
import WhisperAds from "./projects/WhisperAds";
import "./Projects.css";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const { isMobile } = useContext(ScreenSizeContext);
  const projects = [
    "EDU-VRAI",
    "CERASP Website",
    "Game Map Generator",
    "WhisperAds",
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
    console.log(index);
  };

  return (
    <>
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
        {selectedIndex == 0 && <EduVrai />}
        {selectedIndex == 1 && <CeraspWebsite />}
        {selectedIndex == 2 && <GameMapGenerator />}
        {selectedIndex == 3 && <WhisperAds />}
      </div>
    </>
  );
};

export default Projects;
