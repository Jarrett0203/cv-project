import React from "react";
import "../../styles/Form/EducationItem.css";

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
  return (
    <div className="educationItem">
      <input
        type="text"
        className="university"
        placeholder="University Name"
        onChange={e => onChange(e, id)}
        value={educationItem.university}
      />
      <input
        type="text"
        className="city"
        placeholder="City"
        onChange={e => onChange(e, id)}
        value={educationItem.city}
      />
      <input
        type="text"
        className="degree"
        placeholder="Degree"
        onChange={e => onChange(e, id)}
        value={educationItem.degree}
      />
      <input
        type="text"
        className="subject"
        placeholder="Subject"
        onChange={e => onChange(e, id)}
        value={educationItem.subject}
      />
      <label className="dateLabel">
        From
        <input
          type="date"
          className="from"
          placeholder="From"
          onChange={e => onChange(e, id)}
          value={educationItem.from}
        />
      </label>
      <label className="dateLabel">
        To
        <input
          type="date"
          className="to"
          placeholder="To"
          onChange={e => onChange(e, id)}
          value={educationItem.to}
        />
      </label>
      <button className="delete" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EducationItem;
