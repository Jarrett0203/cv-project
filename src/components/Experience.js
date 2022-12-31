import React from "react";
import ExperienceItem from "./ExperienceItem";
import "./../styles/Experience.css";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => {
    return (
      <ExperienceItem
        key={experienceItem.id}
        id={experienceItem.id}
        experienceItem={experienceItem}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="experience">
      <h3>Experience</h3>
      {experienceItems}
      <button className="add" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default Experience;
