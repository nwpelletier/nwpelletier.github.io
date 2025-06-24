import React, { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const EduVrai = () => {
  const { isTablet, isMobile } = useContext(ScreenSizeContext);
  return (
    <div className="project-single-container">
      <div className="project-single-header">
        <img
          src="/pictures/edu-vrai-incubator.jpg"
          height="48px"
          width="48px"
          alt="Incubator Thumbnail"
        />
        <h1>EDU-VRAI</h1>
        <span>|</span>
        <a
          href="https://vrai-dev.johnabbott.qc.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the VRAI website
        </a>
      </div>

      <div className="project-single-scrollable">
        <div
          className={
            isTablet || isMobile
              ? `project-single-column`
              : `project-single-row`
          }
        >
          <img src="/pictures/edu-vrai-incubator.jpg" alt="VR incubator view" />
          <p>
            A networked VR project built in Unity using a client-server
            architecture, where multiple users can interact with programmable
            lab equipment in real time to simulate scientific experiments
            collaboratively in a shared virtual environment. When I joined the
            project, a modular BTV system (Behavior, Target, Visualizer) was
            already in place to organize interaction logic. My role involved
            extending this model across new equipment and objects while
            maintaining sync across clients using Unity's Netcode RPC system.
          </p>
        </div>

        <div className="project-single-column">
          <p>
            I focused heavily on debugging and expanding the functionality of
            the tube fuser and tube sealer, adding custom error states and
            teacher-student interaction modes. I also designed and implemented
            several systems from scratch, including the incubator, autoclave,
            and an adjustable lab chair—each with interactive VR controls and
            networked state management.
          </p>
          <figure>
            <img src="/pictures/edu-vrai-tubefuser.jpg" alt="Tube fuser view" />
            <figcaption>
              The tube fuser includes states for error injection and
              troubleshooting tasks
            </figcaption>
          </figure>
        </div>

        <div className="project-single-column">
          <p>
            One particularly challenging feature was the ability to “paint”
            bacteria samples onto petri dishes. This required encoding sample
            data into compact, serializable forms (using byte arrays and custom
            structs) that could be transmitted via RPC and reliably synced
            between clients.
          </p>
        </div>

        <div className="project-single-row">
          <p>
            Beyond system logic, I also contributed to UX and polish: adding
            visual highlights on hoverable objects, automatic resets for objects
            that fell out of bounds, and key audio cues—like ambient fans,
            machinery clicks, and interface feedback sounds—to enhance
            immersion. The project emphasized low-latency, high-reliability
            communication, with careful attention to intuitive user experience
            in a complex, educational VR setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduVrai;
