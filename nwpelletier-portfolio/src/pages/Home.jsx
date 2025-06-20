import React from "react";
import "./Home.css";
import { FiCode, FiPenTool, FiCpu, FiFeather, FiUsers } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="about-me">
        <h2>Hi! My name is Nick Pelletier</h2>
        <h4>
          I am a web developer focused on React and modern UI. Coming from a
          music and sound recording background, I approach problems carefully
          and creatively, with strong attention to detail and user experience.
        </h4>
      </div>

      <div className="more-details">
        <div className="nick-photo"></div>
        <div className="icon-row">
          <div className="icon-item">
            <FiCode className="icon" />
            <p>Clean, efficient code for scalable web apps.</p>
          </div>
          <div className="icon-item">
            <FiPenTool className="icon" />
            <p>Thoughtful, creative design that speaks to users.</p>
          </div>
          <div className="icon-item">
            <FiCpu className="icon" />
            <p>Problem-solving with a technical and analytical mindset.</p>
          </div>
          <div className="icon-item">
            <FiFeather className="icon" />
            <p>
              Attention to detail inspired by my music & sound recording roots.
            </p>
          </div>
          <div className="icon-item">
            <FiUsers className="icon" />
            <p>
              Collaborative spirit focused on team success and communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
