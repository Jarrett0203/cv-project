import React from "react";
import ".././styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="resumeHeader">
        <p className="name">fasdf</p>
        <p className="title">asdfasdf</p>
      </header>
      <div className="main">
        <div className="description">
          <h3>Description</h3>
          <p className="descriptionText"></p>
        </div>
        <div className="experience">
          <h3>Experience</h3>
        </div>
        <div className="education">
          <h3>Education</h3>
        </div>
      </div>
      <div className="personalDetails">
        <img src={require("../images/defaultProfile.png")} alt="Profile" className="profileImage" />
        <div className="detailsSection">
          <h4>Address</h4>
          <p className="address"></p>
          <h4>Phone Number</h4>
          <p className="number"></p>
          <h4>Email</h4>
          <p className="email"></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
