import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";

const Synth = () => {
  const navigate = useNavigate();
  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>
          <a
            href="https://drive.google.com/drive/folders/1OXa0RE4GDDlDi6X_IeMIbDLmzFCjL7Xu?usp=share_link"
            target="_blank"
          >
            Synth
          </a>
        </h1>
      </div>
      <div className="ProjectDesc">
        I have developed a music-related Final Year Project (FYP) that enables
        users to connect their MIDI controller to a virtual synthesizer that I
        have personally designed. One of the standout features of this FYP is
        that users are able to adjust parameters in real-time, creating a
        dynamic music-making experience. The project has been coded using both
        C++ and the June framework. The synthesizer itself offers the user a
        selection of three different waves that can be played in mono sound.
        Additionally, the user has the freedom to switch between these waves and
        can customize their sound further by adjusting the attack, decay,
        sustain, and release of the notes. These features allow users to create
        truly unique sounds utilizing this innovative synthesizer.
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>C++ </li>
          <li> Juce Framework </li>
        </ul>
        <a
          href="https://drive.google.com/drive/folders/1OXa0RE4GDDlDi6X_IeMIbDLmzFCjL7Xu?usp=share_link"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default Synth;
