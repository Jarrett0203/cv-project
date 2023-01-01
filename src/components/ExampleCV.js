import { v4 as uuidv4 } from "uuid";
import examplePhoto from "../images/examplePhoto.jpg";

const exampleCV = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Senior Web Developer",
    photo: examplePhoto,
    address: "Example Street 10",
    number: "123456789",
    email: "john.doe@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "Facebook Inc.",
      city: "Menlo Park",
      from: "2015-02-01",
      to: "2022-03-03",
    },
    {
      id: uuidv4(),
      position: "Junior Web Developer",
      company: "Tesla Inc.",
      city: "Palo Alto",
      from: "2012-01-01",
      to: "2015-02-01",
    },
    {
      id: uuidv4(),
      position: "UI / UX Designer",
      company: "Google LLC",
      city: "Mountain View",
      from: "2010-01-01",
      to: "2012-01-01",
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: "University of Technology",
      city: "Oklahoma",
      degree: "Master",
      subject: "Science",
      from: "2008-01-01",
      to: "2010-01-01",
    },
    {
      id: uuidv4(),
      university: "University of Design Art",
      city: "New York",
      degree: "Bachelor",
      subject: "Visual Art",
      from: "2005-01-01",
      to: "2008-01-01",
    },
  ],
};

export default exampleCV;
