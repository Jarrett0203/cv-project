import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../images/defaultProfile.png";

const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    address: "",
    number: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default emptyCV;