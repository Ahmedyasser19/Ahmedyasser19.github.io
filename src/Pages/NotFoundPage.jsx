import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, []);

  return (
    <div className="text-center Hero grid place-items-center ">
      <div className="Hero-Text Hero-Name text-cyan-50 ">
        <span> 404 Page Not Found!!! </span>
        <br></br>
        <div>Redirecting...</div>
      </div>
    </div>
  );
};

export default NotFound;
