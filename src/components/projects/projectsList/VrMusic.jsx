import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";

const VrMusic = () => {
  const navigate = useNavigate();
  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>
          <a
            href="https://drive.google.com/drive/folders/1OXa0RE4GDDlDi6X_IeMIbDLmzFCjL7Xu"
            target="_blank"
          >
            VR Music Game
          </a>
        </h1>
      </div>
      <div className="ProjectDesc">
        Users are able to explore their musical talents through the interactive
        gameplay of our Virtual Reality (VR) game. This engaging game offers the
        opportunity to play either drums, following pre-selected drum patterns
        from the menu, or to showcase piano skills. The game boasts impressive
        color schemes which are sure to enhance the user's gaming experiences.
        In addition to the musical elements of the game, users are also able to
        navigate the VR environment by exploring the surrounding house and
        discovering various interactive features.
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>C# </li>
          <li>Unity </li>
        </ul>
        <a
          href="https://drive.google.com/drive/folders/1OXa0RE4GDDlDi6X_IeMIbDLmzFCjL7Xu"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default VrMusic;
