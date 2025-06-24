import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header Section */}
        <div className="resume-header">
          <h1 className="resume-name-title">Nick Pelletier</h1>
          <div className="resume-contact-info">
            <div className="resume-contact-item">
              <span className="resume-contact-label">Email:</span>
              <a href="mailto:nickw.pelletier@gmail.com">
                nickw.pelletier@gmail.com
              </a>
            </div>
            <div className="resume-contact-item">
              <span className="resume-contact-label">Location:</span>
              <span id="resume-city">Montréal, QC</span>
            </div>
            <div className="resume-contact-item">
              <span className="resume-contact-label">Phone:</span>
              <a href="tel:+14386801479">(438) 680-1479</a>
            </div>
            <div className="resume-contact-item">
              <span className="resume-contact-label">GitHub:</span>
              <a
                href="https://github.com/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/nwpelletier
              </a>
            </div>
            <div className="resume-contact-item">
              <span className="resume-contact-label">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nwpelletier
              </a>
            </div>
          </div>
          <div className="resume-download-section">
            <a
              className="resume-download-btn"
              href="/npelletier-resume-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="resume-download-icon">⬇</span>
              View Resume PDF
            </a>
          </div>
        </div>

        {/* Download Button */}

        {/* Objective Section */}
        <div className="resume-section resume-objective">
          <h2 className="resume-section-title">Objective</h2>
          <div className="resume-section-content">
            <p>
              Curious and creative developer driven by a love of problem-solving
              and thoughtful design. I focus on web technologies and enjoy
              crafting clean, intuitive experiences. Always learning, I aim to
              build solutions that are both functional and meaningful.
            </p>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Professional Experience</h2>
          <div className="resume-section-content">
            <div className="resume-experience-item">
              <div className="resume-job-header">
                <h3 className="resume-job-title">Software and Web Developer</h3>
                <div className="resume-job-details">
                  <span className="resume-company">CERASP</span>
                  <span className="resume-date-location">
                    Jan 2024 – Present | Montreal, QC
                  </span>
                </div>
              </div>
              <ul className="resume-job-duties">
                <li>
                  Designed and implemented a responsive, multilingual website
                  using React and Strapi, enabling non-technical users to manage
                  content.
                </li>
                <li>
                  Developed custom components and dynamic page rendering for
                  branded and flexible content delivery.
                </li>
                <li>
                  Optimized layouts for mobile-first performance and
                  accessibility across platforms.
                </li>
                <li>
                  Contributed to Unity VR projects by refining user interaction
                  mechanics and real-time simulation behavior.
                </li>
              </ul>
            </div>

            <div className="resume-experience-item">
              <div className="resume-job-header">
                <h3 className="resume-job-title">Sound Recording Technician</h3>
                <div className="resume-job-details">
                  <span className="resume-company">McGill University</span>
                  <span className="resume-date-location">
                    Jan 2020 – Jan 2022 | Montreal, QC
                  </span>
                </div>
              </div>
              <ul className="resume-job-duties">
                <li>
                  Provided technical support for high-fidelity audio recording
                  sessions in studio and live settings.
                </li>
                <li>
                  Operated and maintained professional equipment including Pro
                  Tools systems, analog/digital consoles, and microphones.
                </li>
                <li>
                  Assisted in post-production workflows including editing and
                  mixing in collaboration with faculty and students.
                </li>
              </ul>
            </div>

            <div className="resume-experience-item">
              <div className="resume-job-header">
                <h3 className="resume-job-title">Production Assistant</h3>
                <div className="resume-job-details">
                  <span className="resume-company">
                    Industrial Light & Magic (ILM)
                  </span>
                  <span className="resume-date-location">
                    Aug 2016 – Aug 2018 | Vancouver, BC
                  </span>
                </div>
              </div>
              <ul className="resume-job-duties">
                <li>
                  Managed asset tracking, documentation, and interdepartmental
                  communication for VFX film projects.
                </li>
                <li>
                  Coordinated daily reviews, meetings, and schedules between
                  artists, supervisors, and staff.
                </li>
                <li>
                  Contributed to version control, render queue management, and
                  pipeline organization under tight deadlines.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-section-content">
            <div className="resume-skills-category">
              <h3 className="resume-skill-category-title">Web Development</h3>
              <div className="resume-skills-list">
                <span className="resume-skill-tag">HTML</span>
                <span className="resume-skill-tag">CSS</span>
                <span className="resume-skill-tag">JavaScript</span>
                <span className="resume-skill-tag">React</span>
                <span className="resume-skill-tag">Node.js</span>
                <span className="resume-skill-tag">SQL</span>
                <span className="resume-skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="resume-skills-category">
              <h3 className="resume-skill-category-title">
                Development Tools and Task Management
              </h3>
              <div className="resume-skills-list">
                <span className="resume-skill-tag">Git</span>
                <span className="resume-skill-tag">Postman</span>
                <span className="resume-skill-tag">AWS</span>
                <span className="resume-skill-tag">Trello</span>
                <span className="resume-skill-tag">Notion</span>
                <span className="resume-skill-tag">Jira</span>
                <span className="resume-skill-tag">Figma</span>
              </div>
            </div>
            <div className="resume-skills-category">
              <h3 className="resume-skill-category-title">Game Development</h3>
              <div className="resume-skills-list">
                <span className="resume-skill-tag">Unity</span>
                <span className="resume-skill-tag">C#</span>
                <span className="resume-skill-tag">FMOD</span>
              </div>
            </div>
            <div className="resume-skills-category">
              <h3 className="resume-skill-category-title">
                Photo/Video/Audio Editing
              </h3>
              <div className="resume-skills-list">
                <span className="resume-skill-tag">Photoshop</span>
                <span className="resume-skill-tag">Premiere</span>
                <span className="resume-skill-tag">Pro Tools</span>
                <span className="resume-skill-tag">Logic Pro</span>
                <span className="resume-skill-tag">Reaper</span>
                <span className="resume-skill-tag">MIDI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-section-content">
            <div className="resume-education-item">
              <div className="resume-degree-header">
                <h3 className="resume-degree-title">
                  AEC, Full Stack Development
                </h3>
                <div className="resume-education-details">
                  <span className="resume-school">John Abbott College</span>
                  <span className="resume-date-location">
                    01/2023 – 01/2024 | Montreal, QC
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-education-item">
              <div className="resume-degree-header">
                <h3 className="resume-degree-title">Master, Sound Recording</h3>
                <div className="resume-education-details">
                  <span className="resume-school">McGill University</span>
                  <span className="resume-date-location">
                    09/2019 – 04/2021 | Montreal, QC
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-education-item">
              <div className="resume-degree-header">
                <h3 className="resume-degree-title">Bachelor, Music</h3>
                <div className="resume-education-details">
                  <span className="resume-school">University of Ottawa</span>
                  <span className="resume-date-location">
                    09/2009 – 04/2013 | Ottawa, ON
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="resume-section">
          <h2 className="resume-section-title">Projects</h2>
          <div className="resume-section-content">
            <div className="resume-project-item">
              <div className="resume-project-header">
                <h3 className="resume-project-title">
                  WhisperAds (Google Chrome Extension)
                </h3>
                <span className="resume-project-date">
                  March 2025 – May 2025
                </span>
              </div>
              <ul className="resume-project-details">
                <li>
                  Designed and developed a Google Chrome extension that
                  automatically detects and mutes or lowers the volume of
                  autoplay videos and ads, enhancing user browsing experience on
                  media-heavy websites.
                </li>
                <li>
                  Utilized JavaScript, Chrome Extension APIs, and DOM
                  manipulation to programmatically monitor and control audio
                  elements in real time.
                </li>
                <li>
                  Implemented efficient polling and event-based mechanisms to
                  minimize performance impact while maintaining consistent
                  behavior across major sites.
                </li>
                <li>
                  Packaged and tested the extension with attention to UX for
                  intuitive on/off toggling and user control.
                </li>
              </ul>
            </div>

            <div className="resume-project-item">
              <div className="resume-project-header">
                <h3 className="resume-project-title">
                  Procedural Map Generator (Unity)
                </h3>
                <span className="resume-project-date">
                  July 2024 – December 2024
                </span>
              </div>
              <ul className="resume-project-details">
                <li>
                  Built a procedural level generation system in Unity using C#
                  and Kruskal’s algorithm to produce fully connected room-based
                  layouts suitable for roguelike and dungeon-crawler games.
                </li>
                <li>
                  Integrated spatial constraints and logic for doors, corridors,
                  and dead ends to ensure balance between exploration and guided
                  design.
                </li>
                <li>
                  Structured the system for extensibility — allowing future
                  incorporation of enemy placement, loot generation, and
                  adaptive difficulty scaling.
                </li>
                <li>
                  Focused on performance efficiency and maintainable codebase
                  for potential adaptation to 2D or VR-based level design.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
