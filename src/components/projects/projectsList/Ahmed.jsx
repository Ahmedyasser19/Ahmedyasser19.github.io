import React from "react";
import "./projects.css";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";
const Ahmed = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ProjectsContainer">
        <div className="BackButton" onClick={() => navigate(-1)}>
          <img src={BackButton} />
        </div>
        <div className="ProjectTitle">
          <h1>./Ahmed</h1>
        </div>
        <div className="ProjectDesc">
          As a software developer, I built my portfolio website using a
          combination of HTML, CSS, JavaScript, and React. My portfolio
          showcases my skills, experience, and projects, providing potential
          employers and clients with a visual representation of my capabilities.{" "}
        </div>
        <div className="ProjectTech">
          <ul className="Tech">
            Tech:
            <li>Html</li>
            <li>CSS</li>
            <li>REACT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ahmed;
