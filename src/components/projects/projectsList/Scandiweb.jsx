import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import Carousel from "../../carousel/Carousel";

const Scandiweb = () => {
  const markDownText = `
  
  `;
  const repo = null;
  const navigate = useNavigate();
  const images = [
    "/img/scandiweb/scandiweb1.png",
    "/img/scandiweb/scandiweb2.png",
    "/img/scandiweb/scandiweb3.png",
  ];

  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>Scandiweb</h1>
        <h2>{"Full Stack Project. (under dev)"}</h2>
      </div>
      <div className="mainContainer">
        <div className="ProjectDesc">
          <p>
            This project is an e-commerce platform designed for selling products
            made for a client. They requested a SPA were users can order items
            in various sizes and colors, filters based on the clicked menu and a
            page for each product. They requested to use react with class
            components, MYSQL as a data base, graphql for an API.
          </p>
        </div>
        <Carousel images={images} gitRepo={repo} />
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li> HTML </li>
          <li> CSS </li>
          <li> REACT</li>
          <li> NODE JS</li>
          <li> MYSQL </li>
          <li> APOLLO CLIENT AND SERVER</li>
          <li> TAILWIND</li>
        </ul>
        {/* <a href={repo} target="_blank">
          Link
        </a> */}
      </div>
    </div>
  );
};

export default Scandiweb;
