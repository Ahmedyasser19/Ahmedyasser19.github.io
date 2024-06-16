import React from "react";
import BackButton from "../../../../public/img/BackButton.svg";
import { useNavigate } from "react-router-dom";
import Carousel from "../../carousel/Carousel";

const MovieGallery = () => {
  const navigate = useNavigate();
  const repo = "https://github.com/Ahmedyasser19/MoviesGallery2024.git";

  const images = ["/img/MovieGallery.png"];
  return (
    <div className="ProjectsContainer">
      <div className="BackButton" onClick={() => navigate(-1)}>
        <img src={BackButton} />
      </div>
      <div className="ProjectTitle">
        <h1>Movie Gallery</h1>
        <h2>{"Front End"}</h2>
      </div>
      <div className="mainContainer">
        <div className="ProjectDesc">
          Movie Gallery is a sophisticated web application designed to fetch and
          present movie data from an external API. This project was developed to
          enhance my proficiency in React and to explore the capabilities of the
          React Query library. Below are the key features of the website: Data
          Fetching from The Movie Database (TMDb) API: The application
          seamlessly integrates with the TMDb API, fetching real-time movie data
          to provide users with the latest and most accurate information. Custom
          Carousels: I implemented carousels from scratch, showcasing a deep
          understanding of React and front-end development.
        </div>
        <Carousel images={images} gitRepo={repo} />
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>HTML </li>
          <li> CSS </li>
          <li> REACT</li>
        </ul>
        <a href={repo} target="_blank">
          Link
        </a>
      </div>
    </div>
  );
};

export default MovieGallery;
