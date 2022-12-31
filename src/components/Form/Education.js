import React from "react";
import "./../../styles/Form/Education.css";

const Experience = ({education, onChange, onAdd, onDelete}) => {
  return (
    <div className="education">
      <h3>Education</h3>
      <input type="text" className="university" placeholder="University Name" />
      <input type="text" className="city" placeholder="City" />
      <input type="text" className="degree" placeholder="Degree" />
      <input type="text" className="subject" placeholder="Subject" />
      <label className="dateLabel">
        From
        <input type="date" className="from" placeholder="From" />
      </label>
      <label className="dateLabel">
        To
        <input type="date" className="to" placeholder="To" />
      </label>
      <button className="delete">Delete</button>
      <button className="add">Add</button>
    </div>
  );
};

export default Experience;
