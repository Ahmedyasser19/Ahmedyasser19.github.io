import React from "react";
import "./hero.css";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="HeroContainer">
        <div className="HeroMain">
          <div className="HeroSub">Hello! I am</div>
          <span className="HeroName"> Ahmed Yasser </span>
          <div className="HeroSub">Software Engineer & Web Developer</div>
          <p className="HeroSub2">
            🚀 crafting Digital Experiences That Matter 🚀
          </p>
          <div className="CallToAction">
            <a href="/img/AhmedYasser_CV.pdf" download="AhmedYasser_CV.pdf">
              Downlaod CV
            </a>
            <p>
              <NavLink to="/Experience">./Experience</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
