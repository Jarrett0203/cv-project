import React from "react";
import "./../styles/Input.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Utils from "./Utils";

const Input = () => {
  return (
    <form action="POST" className="inputDetails">
      <PersonalInfo />
      <Experience />
      <Education />
      <Utils />
    </form>
  );
};

export default Input;
