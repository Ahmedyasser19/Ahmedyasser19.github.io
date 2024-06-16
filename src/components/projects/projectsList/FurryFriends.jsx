import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import Carousel from "../../carousel/Carousel";

const FurryFriends = () => {
  const markDownText = ``;
  const repo = "https://github.com/Ahmedyasser19/FurryFriends2024";
  const navigate = useNavigate();
  const images = [
    "/img/furryFriends/FurryFriends.png",
    "/img/furryFriends/products page.png",
    "/img/furryFriends/cart page.png",
    "/img/furryFriends/Prodict detail 1- desktop.png",
    "/img/furryFriends/Prodict detail 2- desktop.png",
    "/img/furryFriends/Prodict detail 3- desktop.png",
  ];

  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>Furry Friends</h1>
        <h2>{"Full Stack Project. (under dev)"}</h2>
      </div>
      <div className="mainContainer">
        <div className="ProjectDesc">
          <p>
            This project is an e-commerce platform designed for pet products.
            Users can create accounts, purchase items in various sizes and
            colors, and leave comments and ratings. Additionally, they can
            filter items to find exactly what they need. Administrators have
            access to a dedicated dashboard for managing the store's inventory,
            including the ability to add, edit, and delete items. On the right,
            you will find the Figma design inspirations that will guide the
            development process. ---
          </p>
        </div>
        <Carousel images={images} gitRepo={repo} />
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>HTML </li>
          <li> CSS </li>
          <li> REACT</li>
          <li> Type Script </li>
          <li> Node js</li>
          <li> Express</li>
        </ul>
        <a
          href="https://github.com/Ahmedyasser19/FurryFriends2024"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default FurryFriends;
