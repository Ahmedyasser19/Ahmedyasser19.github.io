import React, { useState } from "react";
import "./menu.css";
const Menu = () => {
  const ExpertiseLanguages = [
    "HTML",
    "CSS",
    " Java script",
    "Cypress",
    " React",
    "TailwindCSS",
    "NodeJS",
    "NextJs",
    "Express",
    "MongoDB",
    "Figma",
    "SQL",
    " Bootstrap",
    "postman",
    "json",
    "Git&Github",
    "C++",
    "Unity",
    "Linux",

    "Oracle",
    " C#",

    "Java",

    "python",

    "Android studio",
    "VS code",
  ];

  const ExpertiseImages = [
    "/img/HTML.jpg",
    "/img/CSS.jpg",
    "/img/JavaScript.jpg",
    "/img/cypress.png",
    "/img/react.png",
    "/img/tailwind.jpg",
    "/img/NodeJs.png",
    "/img/NextJs.webp",
    "/img/ExpressJs.png",
    "/img/Mongodb.jpg",
    "/img/Figma.jpg",
    "/img/SQL.jpg",
    "/img/bootstrap.jpg",
    "/img/Postman.webp",
    "/img/Json.png",
    "/img/git-and-github.png",
    "/img/cpp.jpg",
    "/img/Unity.jpg",
    "/img/Linux.jpg",
    "/img/oracle.png",
    "/img/cSharp.png",
    "/img/Java.jpg",
    "/img/python.webp",
    "/img/androidstudio.webp",
    "/img/VsCode.jpg",
  ];

  const [isHover, setHover] = useState(null);

  const handleHover = (listIndex) => {
    setHover(ExpertiseImages[listIndex]);
  };
  const Expertise = () => {
    return ExpertiseLanguages.map((lang, listIndex) => (
      <div
        className="ListElement"
        key={listIndex}
        onMouseEnter={() => handleHover(listIndex)}
      >
        <li>
          <p>{lang}</p>
          <hr className=" opacity-10" />
        </li>
        <span>-</span>
      </div>
    ));
  };
  return (
    <>
      <div className="ShowOff">
        <div className="PicContainer">
          <img className="Img" src={isHover} alt="" />
        </div>

        <div className="MenuHead">
          <div className="MenuHeadd">Skills</div>
          <hr />
          <div className="MenuContainer">
            <ul>{Expertise()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
