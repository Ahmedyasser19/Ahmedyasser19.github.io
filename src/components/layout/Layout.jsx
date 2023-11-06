import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Bg from "../background/Bg";
import "./layout.css";
import { useState } from "react";

const Layout = () => {
  const [Mouse, SetMouse] = useState({ PosX: "0", PosY: "0" });

  const MouseFun = (e) => {
    let PosX = `${e.clientX}px`;
    let PosY = `${e.clientY}px`;

    SetMouse({ PosX, PosY });
  };

  const MouseFunTouch = (e) => {
    [...e.changedTouches].forEach((touch) => {
      let PosX = `${touch.clientX}px`;
      let PosY = `${touch.clientY}px`;
      SetMouse({ PosX, PosY });
    });
  };

  const MouseStyle = {
    top: `${Mouse.PosY}`,
    left: `${Mouse.PosX}`,
  };
  return (
    <>
      <div
        className="MouseOutLine MouseUp"
        data-cursor-outline
        style={MouseStyle}
      ></div>
      <div
        className="MouseDot MouseUp"
        data-cursor-dot
        style={MouseStyle}
      ></div>

      <div onMouseMove={MouseFun} onTouchMove={MouseFunTouch}>
        <Bg />
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
