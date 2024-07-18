import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../expertise/menu.css";
import "./projects.css";

const Projects = () => {
  const projects = [
    ["Scandiweb", "Website"],
    ["Furry Friends", "Website"],
    ["Parking Smart", "Website"],
    ["Ahmed", "Website"],
    ["MovieGallery", "Website"],
    ["Virtual Synth", "Final Year Project"],
    ["VR Music Studio", "VR Game"],
    ["2D Hero Game", "2D Game"],
    ["CovidSafe", "Android App"],
  ];

  const links = [
    "/projects/Scandiweb",
    "/projects/FurryFriends",
    "/projects/ParkingSmart",
    "/projects/Ahmed",
    "/projects/MovieGallery",
    "/projects/Synth",
    "/projects/VRMusicGame",
    "/projects/2DHeroGame",
    "/projects/CovidSafe",
  ];

  const [projectsHover, setProjectsHover] = useState({
    PosX: "0px",
    PosY: "0px",
  });

  const handleImage = (e) => {
    let PosX = `${e.clientX - 150}px`;
    let PosY = `${e.clientY - 160}px`;

    setProjectsHover({ PosX, PosY });
  };

  const projectsImages = [
    "/img/scandiweb/scandiweb1.png",
    "/img/furryFriends/FurryFriends.png",
    "/img/parkingSmart/Home.png",
    "/img/Ahmed.png",
    "/img/MovieGallery.png",
    "/img/FYP.png",
    "/img/VRGame.png",
    "/img/2Dgame.png",
    "/img/CovidSafe.png",
  ];

  const [isHover, setHover] = useState(null);

  const handleHover = (listIndex) => {
    setHover(projectsImages[listIndex]);
  };

  const Expertise = () => {
    return projects.map((project, listIndex) => (
      <div
        className="ListElement"
        key={listIndex}
        onMouseEnter={() => handleHover(listIndex)}
      >
        <li onMouseMove={handleImage}>
          <NavLink to={links[listIndex]}>
            <p>{project[0]}</p>
          </NavLink>
          <hr className="opacity-10" />
        </li>
        <span>{project[1]}</span>
      </div>
    ));
  };

  const [isEntered, setIsEntered] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const showImage = () => {
    setIsEntered(true);
    setIsLeft(false);
  };

  const hideImage = () => {
    setIsLeft(true);
    setIsEntered(false);
  };

  return (
    <>
      <div className="ShowOff project">
        <div className="MenuHead project">
          <div className="MenuHeadd">Projects</div>
          <hr />
          <div className="MenuContaine">
            <ul onMouseEnter={showImage} onMouseLeave={hideImage}>
              {Expertise()}
            </ul>
          </div>
        </div>

        <div
          className="ProjectsHover"
          style={{
            left: projectsHover.PosX,
            top: projectsHover.PosY,
            display: isEntered ? "flex" : "none",
          }}
        >
          <img className="asd" src={isHover} alt="Project Preview" />
        </div>
      </div>
    </>
  );
};

export default Projects;
