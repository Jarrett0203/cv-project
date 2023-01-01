import React from "react";
import "../../styles/Resume/EducationItem.css"

const EducationItem = ({educationItem}) => {
  const {from, to, university, city, degree, subject} = educationItem;
  return (
    <div className="resumeEducationItem">
      <p className="period">{from} - {to}</p>
      <div className="info">
        <p className="university">{university}, {city}</p>
        <p className="degree">Degree: {degree}</p>
        <p className="subject">Subject: {subject}</p>
      </div>
    </div>
  );
};

export default EducationItem;