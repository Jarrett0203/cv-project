import React, { forwardRef } from "react";
import ".././styles/Resume.css";

const Resume = forwardRef((cv, ref) => {
  const {firstName, lastName, title, photo, address, number, email, description} = cv.cv.personalInfo;
  const education = cv.cv.education;
  return (
    <div className="resume" ref={ref}>
      <header className="resumeHeader">
        <p className="nameResume">{firstName} {lastName}</p>
        <p className="titleResume">{title}</p>
      </header>
      <div className="main">
        <div className="description">
          <h3>Description</h3>
          <p className="descriptionText">{description}</p>
        </div>
        <div className="experience">
          <h3>Experience</h3>
        </div>
        <div className="education">
          <h3>Education</h3>
        </div>
      </div>
      <div className="personalDetails">
        <img src={photo} alt="Profile" className="profileImage" />
        <div className="detailsSection">
          <h4>Address</h4>
          <p className="address">{address}</p>
          <h4>Phone Number</h4>
          <p className="number">{number}</p>
          <h4>Email</h4>
          <p className="email">{email}</p>
        </div>
      </div>
    </div>
  );
});

export default Resume;
