import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const hamburger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const NavBar = () => {
  const [isMenuopened, setIsMenuOpened] = useState(false);

  const MenuAnimation = isMenuopened ? " RightMenuAnim" : " ";
  return (
    <>
      <nav className="NavBar">
        <div className="Logo">
          <NavLink to="/">./Ahmed</NavLink>
        </div>
        <nav className="Nav">
          <NavLink to="/">
            ./Home
            <span className="NavNum">01</span>
          </NavLink>
          <NavLink to="./Skills">
            ./Skills
            <span className="NavNum">02</span>
          </NavLink>
          <NavLink to="./Projects">
            ./Projects
            <span className="NavNum">03</span>
          </NavLink>
          <NavLink to="./Experience">
            ./Experience
            <span className="NavNum">05</span>
          </NavLink>
        </nav>
        <menu>
          <div onClick={() => setIsMenuOpened(!isMenuopened)}>{hamburger}</div>
        </menu>
      </nav>

      <div className={`RightMenu ${MenuAnimation}`}>
        <div className="popUpContainer  ">
          <NavLink to="/" onClick={() => setIsMenuOpened(!isMenuopened)}>
            ./Home
          </NavLink>
          <NavLink to="./Skills" onClick={() => setIsMenuOpened(!isMenuopened)}>
            ./Skills
          </NavLink>
          <NavLink
            to="./Projects"
            onClick={() => setIsMenuOpened(!isMenuopened)}
          >
            ./Projects
          </NavLink>
          <NavLink
            to="./Experience"
            onClick={() => setIsMenuOpened(!isMenuopened)}
          >
            ./Experience
          </NavLink>
        </div>
        <div
          onClick={() => setIsMenuOpened(!isMenuopened)}
          className="MenuPhone"
        >
          {hamburger}
        </div>
      </div>
    </>
  );
};

export default NavBar;
