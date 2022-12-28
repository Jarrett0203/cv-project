import React from "react";
import "./../styles/Input.css";
import PersonalInfo from "./PersonalInfo";

const Input = () => {
  return (
    <form action="POST" className="inputDetails">
      <PersonalInfo />
    </form>
  );
};

export default Input;
