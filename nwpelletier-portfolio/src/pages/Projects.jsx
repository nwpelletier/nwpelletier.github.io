import React, { useState, useContext } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext";
import projectsData from "../data/projectsData.json";
import "./Projects.css";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isMobile } = useContext(ScreenSizeContext);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="page-container">
      <div className="projects-list">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`project-title ${selectedIndex === idx ? "active" : ""}`}
            onClick={() => handleSelect(idx)}
          >
            {project.title}
          </div>
        ))}
      </div>

      <div className="projects-container">
        {projectsData.map((project, idx) => {
          if (!isMobile && selectedIndex !== idx) return null;

          return (
            <div key={idx} className="project">
              <h1>{project.title}</h1>
              <div className="project-subheading">
                <h3>{project.technologies}</h3>
                {project.url && <span> | </span>}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.urlTitle || ""}
                </a>
              </div>

              {project.content.map((item, i) => {
                if (item.type === "text") return <p key={i}>{item.value}</p>;
                if (item.type === "image")
                  return (
                    <img
                      key={i}
                      src={item.src}
                      alt={`${project.title} image ${i}`}
                    />
                  );
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
