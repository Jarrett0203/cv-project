import React from "react";
import "./../../styles/Form/Education.css";
import EducationItem from "./EducationItem";

const Education = ({education, onChange, onAdd, onDelete}) => {
  const educationItems = education.map(educationItem =>
    <EducationItem 
    key={educationItem.id}
    id={educationItem.id}
    educationItem={educationItem}
    onChange={onChange}
    onDelete={onDelete}
    ></EducationItem>
  );

  return (
    <div className="education">
      <h3>Education</h3>
      {educationItems}
      <button className="add" onClick={onAdd}>Add</button>
    </div>
  );
};

export default Education;
