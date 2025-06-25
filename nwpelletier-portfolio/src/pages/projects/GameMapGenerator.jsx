import React, { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import "./SingleProject.css";

const GameMapGenerator = () => {
  const { isTablet, isMobile } = useContext(ScreenSizeContext);
  return (
    <div className="project-single-container">
      <div className="project-single-header">
        <img
          src="/pictures/map-generator-layout1.jpg"
          height="48px"
          width="48px"
        />
        <h1>Game Map Generator</h1>
      </div>
      <div className="project-single-scrollable">
        <div
          className={
            isTablet || isMobile
              ? `project-single-column`
              : `project-single-row`
          }
        >
          <img src="/pictures/map-generator-layout1.jpg" />
          <p>
            This was my first fully self-driven deep dive into Unity, sparked by
            the desire to better understand procedural content
            generation—specifically the kind of dungeon-like level design seen
            in games like The Binding of Isaac, Spelunky, and Rogue Legacy.
            After contributing to the EDU-VRAI VR project, I wanted to explore
            game design mechanics from the ground up, even if the visuals and
            systems were primitive at first.
          </p>
        </div>

        <div className="project-single-column">
          <p>
            The generator allows the user to define any grid size (minimum 3x3),
            and automatically builds a maze that includes a spawn room, an exit
            room, and a selection of other room types—such as enemy rooms, trap
            rooms, and treasure rooms. I implemented Kruskal’s algorithm to
            ensure a connected maze with no loops, so the player can always
            reach the exit from the spawn point, while preserving a nonlinear
            feel that encourages exploration.
          </p>
          <figure>
            <img src="/pictures/map-generator-layout2.jpg" />
            <figcaption>
              Maze generation in action—each room connected and type-marked.
              Blue 'parkour' rooms have variants for floor-tile layout (green
              tiling represents a hazard). Rooms with 'enemies' use pawn
              placeholder that currently patrol their rooms in varied
              formations.
            </figcaption>
          </figure>
        </div>

        <div className="project-single-column">
          <p>
            Each room is constructed using prefabs with different combinations
            of open doorways in the four cardinal directions. Colored markers
            and primitive shapes were used to quickly differentiate room types.
            Additional logic determines how far from the spawn each room is
            placed and assigns subtypes accordingly, ensuring that high-value or
            high-risk rooms are distributed in meaningful ways.
          </p>
          <figure>
            <img src="/pictures/map-generator-workspace.jpg" />
            <figcaption>My 'note taking' workspace in Unity</figcaption>
          </figure>
        </div>

        <div className="project-single-row">
          <p>
            While the graphics and 3D elements are barebones, I incorporated
            object pooling to manage potential enemy spawns and allow the system
            to scale to large grids (tested with a grid of 100x100 rooms). This
            began as a technical playground and still functions that way—a
            personal research project that lets me experiment with some of my
            favorite game mechanics. For future iterations, I may refactor it
            into a 2D system to better focus on the logic and usability, but for
            now, it’s a satisfying start to building systems from scratch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameMapGenerator;
