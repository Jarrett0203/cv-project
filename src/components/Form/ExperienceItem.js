import React from "react";
import "./../../styles/Form/ExperienceItem.css";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
  return (
    <div className="experienceItem">
      <input
        type="text"
        className="position"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
        onChange={e => onChange(e, id)}
      />
      <input
        type="text"
        className="company"
        placeholder="Company"
        value={experienceItem.company}
        onChange={e => onChange(e, id)}
      />
      <input
        type="text"
        className="city"
        placeholder="City"
        value={experienceItem.city}
        onChange={e => onChange(e, id)}
      />
      <label className="dateLabel">
        From
        <input
          type="date"
          className="from"
          placeholder="From"
          value={experienceItem.from}
          onChange={e => onChange(e, id)}
        />
      </label>
      <label className="dateLabel">
        To
        <input
          type="date"
          className="to"
          placeholder="To"
          value={experienceItem.to}
          onChange={e => onChange(e, id)}
        />
      </label>
      <button className="delete" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default ExperienceItem;
