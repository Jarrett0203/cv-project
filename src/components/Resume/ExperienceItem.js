import React from "react";
import "../../styles/Resume/ExperienceItem.css"

const ExperienceItem = ({experienceItem}) => {
  const {from, to, position, company, city} = experienceItem;
  return (
    <div className="resumeExperienceItem">
      <p className="period">{from} - {to}</p>
      <div className="info">
        <p className="position">{position}</p>
        <p className="details">{company}, {city}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;