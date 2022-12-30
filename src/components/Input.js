import React, { forwardRef } from "react";
import "./../styles/Input.css";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Utils from "./Utils";

const Input = forwardRef(({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onLoadExample,
  onReset
}, ref) => {
  console.log(cv);
  return (
    <div action="#" className="inputDetails">
      <PersonalInfo personalInfo = {cv.personalInfo} onChangePersonal={onChangePersonal}/>
      <Experience />
      <Education />
      <Utils
        onLoadExample={onLoadExample}
        onReset={onReset}
        ref={ref}
      />
    </div>
  );
});

export default Input;
