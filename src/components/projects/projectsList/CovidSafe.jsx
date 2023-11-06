import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";

const CovidSafe = () => {
  const navigate = useNavigate();
  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>
          <a
            href="https://drive.google.com/drive/folders/1YVF-3P5SBqXAEu9xvRCX4Av0vbMx2xgO?usp=share_link"
            target="_blank"
          >
            CovidSafe
          </a>
        </h1>
      </div>
      <div className="ProjectDesc">
        During the COVID-19 pandemic, an application was developed that
        facilitated safety measures among its users. Through this smartphone
        app, individuals were able to access key features such as registering a
        new account, scanning QR codes for entry into various locations, and
        indicating their safety status in the surrounding area. Fortunately,
        with the transmission rates of the virus in decline, the challenges
        posed by the pandemic are now under control. As a beginner in app
        development, I acknowledge that there is always room for improvement and
        growth. This app was a valuable learning experience that provided me
        with the opportunity to refine my skills as a developer.
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>AndroidStudio </li>
          <li> Java</li>
        </ul>
        <a
          href="https://drive.google.com/drive/folders/1YVF-3P5SBqXAEu9xvRCX4Av0vbMx2xgO?usp=share_link"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default CovidSafe;
