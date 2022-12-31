import React from "react";
import "./../../styles/Form/PersonalInfo.css";

const PersonalInfo = ({ personalInfo, onChangePersonal }) => {
  return (
    <div className="personalInfo">
      <h3>Personal Information</h3>
      <input
        type="text"
        className="firstName"
        placeholder="First Name"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.firstName}
      />
      <input
        type="text"
        className="lastName"
        placeholder="Last Name"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.lastName}
      />
      <input
        type="text"
        className="title"
        placeholder="Title"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.title}
      />
      <label className="photoPrompt">
        Select Photo
        <input
          type="file"
          className="hidden"
          name="photo"
          id="photoInput"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => onChangePersonal(e)}        
        />
      </label>
      <input
        type="text"
        className="address"
        placeholder="Address"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.address}
      />
      <input
        type="tel"
        className="number"
        placeholder="Phone Number"
        pattern="[0-9]{8}"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.number}
      />
      <input
        type="text"
        className="email"
        placeholder="Email Address"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.email}
      />
      <input
        type="text"
        className="description"
        placeholder="Description"
        onChange={(e) => onChangePersonal(e)}
        value={personalInfo.description}
      />
    </div>
  );
};

export default PersonalInfo;
