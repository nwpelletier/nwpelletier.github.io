import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="about-me">
          <h1>Nick Pelletier</h1>
          <h4>Web/Software Developer</h4>
          <p>
            I'm a detail-driven developer who focuses on building performant,
            accessible projects with a creative edge, aiming to craft intuitive
            user experiences that are both functional and visually engaging.
          </p>
        </div>

        <div className="more-details">
          <div className="nick-photo"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
