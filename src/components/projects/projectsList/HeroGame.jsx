import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";

const HeroGame = () => {
  const navigate = useNavigate();
  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>
          <a
            href="https://drive.google.com/drive/folders/1-OEfAgu-z-g6xdc0CQ3ok6fuRDBREFfo?usp=share_link"
            target="_blank"
          >
            2D Heros Game
          </a>
        </h1>
      </div>
      <div className="ProjectDesc">
        In this exhilarating game, superheroes such as Batman, Spider-Man, and
        others collaborate to save the world. Each hero offers a unique gameplay
        style and is set against a backdrop of intricately designed maps,
        providing a diverse and immersive gaming experience. Players can
        traverse the 2D plane, taking out enemies and avoiding damage, all while
        enjoying high-quality animations for both characters and opposing
        forces. Collecting coins throughout the game is essential, and only
        those who successfully reach the level's end will unlock the next
        challenge.
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>C# </li>
          <li> Unity</li>
        </ul>
        <a
          href="https://drive.google.com/drive/folders/1-OEfAgu-z-g6xdc0CQ3ok6fuRDBREFfo?usp=share_link"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default HeroGame;
