import React, { useState, useRef } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Resume from "./components/Resume";
import emptyCV from "./components/EmptyCV";
import exampleCV from "./components/ExampleCV";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { className, value, type } = e.target;
    if (type === "file") {
      handleChangeFile(e);
      return;
    }
    console.log(e.target.className);

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [className]: value,
      },
    }));
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newExperience = prevState.experience.map((expItem) => {
        if (expItem.id === id) return { ...expItem, [name]: value };
        return expItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  function handleLoadExample() {
    setCv(exampleCV);
  }

  const handleReset = () => {
    setCv(emptyCV);
  };

  const componentRef = useRef();

  return (
    <div className="App">
      <Header />
      <Input
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
        ref={componentRef}
      />
      <Resume cv={cv} ref={componentRef} />
    </div>
  );
}

export default App;
