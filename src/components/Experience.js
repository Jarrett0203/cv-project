import React from "react";
import "./../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <input type="text" className="position" placeholder="Position" />
      <input type="text" className="company" placeholder="Company" />
      <input type="text" className="city" placeholder="City" />
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
