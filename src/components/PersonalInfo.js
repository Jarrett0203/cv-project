import React from "react";
import "./../styles/PersonalInfo.css";

const PersonalInfo = () => {
    return (
        <div className="personalInfo">
            <h3>Personal Information</h3>
            <input type="text" className="firstName" placeholder="First Name" />
            <input type="text" className="lastName" placeholder="Last Name"/>
            <input type="text" className="title" placeholder="Title" />
            <label className="photoPrompt">
                Select Photo
                <input type="file" className = "hidden" name="Photo" id="photoInput" accept=".png, .jpg, .jpeg" />
            </label>
            <input type="text" className="address" placeholder="Address" />
            <input type="tel" className="number" placeholder="Phone Number" pattern="[0-9]{8}"/>
            <input type="text" className="email" placeholder="Email Address" />
            <input type="text" className="description" placeholder="Description"/>
        </div>
    );
}

export default PersonalInfo