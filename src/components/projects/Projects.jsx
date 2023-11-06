import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../expertise/menu.css";
import "./projects.css";
const Projects = () => {
  const Projects = [
    ["./Ahmed", "Website"],
    ["Kolo", "Digital Library"],
    ["Synth", "Final Year Project"],
    ["VR Music Studio", "VR Game"],
    ["2D Hero Game", "2D Game"],
    ["CovidSafe", "Android App"],
  ];

  const Links = [
    "/projects/Ahmed",
    "/projects/Kolo",
    "/projects/Synth",
    "/projects/VRMusicGame",
    "/projects/2DHeroGame",
    "/projects/CovidSafe",
  ];

  const [projectsHover, setProjectsHover] = useState([
    { PosX: "0px" },
    { PosY: "0px" },
  ]);

  const HandleImage = (e) => {
    let PosX = `${e.clientX - 150}px`;
    let PosY = `${e.clientY - 160}px`;

    setProjectsHover({ PosX, PosY });
  };

  const ProjectsImages = [
    "/img/Ahmed.png",
    "/img/TV App.png",
    "/img/FYP.png",
    "/img/VRGame.png",
    "/img/2Dgame.png",
    "/img/CovidSafe.png",
  ];

  const [isHover, setHover] = useState(null);

  const handleHover = (listIndex) => {
    setHover(ProjectsImages[listIndex]);
  };

  const Expertise = () => {
    return Projects.map((lang, listIndex) => (
      <div
        className="ListElement"
        key={listIndex}
        onMouseEnter={() => handleHover(listIndex)}
      >
        <li onMouseMove={HandleImage}>
          <NavLink to={Links[listIndex]}>
            <p>{lang[0]}</p>
          </NavLink>
          <hr className=" opacity-10" />
        </li>
        <span>{Projects[listIndex][1]}</span>
      </div>
    ));
  };

  const [isEntered, setIsEntered] = useState(false);
  const [isLeft, setIsLeft] = useState(true);
  const ShowImage = () => {
    setIsEntered(true);
    setIsLeft(false);
  };
  const HideImage = () => {
    setIsLeft(true);
    setIsEntered(false);
  };
  return (
    <>
      <div className="ShowOff project">
        <div className="MenuHead project ">
          <div className="MenuHeadd">Projects</div>
          <hr />
          <div className="MenuContaine">
            <ul onMouseEnter={ShowImage} onMouseLeave={HideImage}>
              {Expertise()}
            </ul>
          </div>
        </div>

        <div
          className="ProjectsHover"
          style={{
            left: `${projectsHover.PosX}`,
            top: `${projectsHover.PosY}`,
            display: isEntered ? "flex" : "none",
          }}
        >
          <img className="asd" src={isHover} />
        </div>
      </div>
    </>
  );
};

export default Projects;
