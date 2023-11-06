import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";

const Kolo = () => {
  const navigate = useNavigate();

  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>Kolo</h1>
        <h2>{"(UnderDev...)"}</h2>
      </div>
      <div className="ProjectDesc">
        Kolo is a personal project aimed at addressing a prevalent issue among
        individuals, myself inclusive. The project seeks to provide a
        centralized platform for organizing one's preferred literature and
        videos. With limited time to indulge in Netflix and other streaming
        services, it has become rather arduous to keep up with preferred
        choices. Additionally, keeping a handwritten list of desired books and
        movies is no longer ideal, as it tends to be disorganized. Kolo aims to
        address this problem by offering users an easily accessible and
        organized space for storing their desired books and movies.
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>HTML </li>
          <li> CSS </li>
          <li> REACT</li>
          <li> Nextjs </li>
          <li> MongoDB </li>
        </ul>
      </div>
    </div>
  );
};

export default Kolo;
