import React, { useState, useContext } from "react";
import EduVrai from "./projects/EduVrai";
import CeraspWebsite from "./projects/CeraspWebsite";
import GameMapGenerator from "./projects/GameMapGenerator";
import WhisperAds from "./projects/WhisperAds";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import "./Projects.css";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isTablet, isDesktop, isMobile } = useContext(ScreenSizeContext);
  const projects = [
    "EDU-VRAI",
    "CERASP Website",
    "Game Map Generator",
    "WhisperAds",
  ];

  const handleSelect = (index) => {
    if (index >= projects.length) {
      setSelectedIndex(0);
    } else if (index < 0) {
      setSelectedIndex(projects.length - 1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      {(isTablet || isDesktop) && (
        <div className="projects-list">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-title ${
                idx === selectedIndex ? `active` : ""
              }`}
              onClick={() => handleSelect(idx)}
            >
              {project}
            </div>
          ))}
        </div>
      )}

      <div className="projects-container">
        {selectedIndex == 0 && <EduVrai />}
        {selectedIndex == 1 && <CeraspWebsite />}
        {selectedIndex == 2 && <GameMapGenerator />}
        {selectedIndex == 3 && <WhisperAds />}
        {isMobile && (
          <div className="project-mobile-selectors">
            <div
              className="project-selector-left"
              onClick={() => handleSelect(selectedIndex - 1)}
            >
              <FiChevronLeft size={24} />
            </div>
            <div
              className="project-selector-right"
              onClick={() => handleSelect(selectedIndex + 1)}
            >
              <FiChevronRight size={24} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
