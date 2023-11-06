import React from "react";

const ContactMe = () => {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectTitle">
        <h1>JOGET TECHNOLOGY SDN. BHD.</h1>
        <div className="JobDetails">
          <h2>Quality Assurance | Automation tester</h2>
          <span>Malaysia April 2023 – Sept 2023</span>
        </div>
      </div>
      <div className="ProjectDesc">
        <ul className="JobDesList">
          <li>
            Discovered, analyzed, and documented critical issues, bugs, defects,
            and other problems using manual and automated tests.
          </li>
          <li>Designed, developed and executed automated tests.</li>
          <li>
            Developed web apps and automated processes on the Joget DX platform.
          </li>
          <li>Guided and instructed new interns.</li>
        </ul>
      </div>
      <div className="ProjectTech">
        <ul className="Tech">
          Tech:
          <li>Html</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Cypress</li>
          <li>Jquery</li>
          <li>..</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
