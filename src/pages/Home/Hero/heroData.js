import hero1 from "../../../assets/images/slider1.jpg";
import hero2 from "../../../assets/images/slider2.webp";
import hero3 from "../../../assets/images/slier3.webp";


import academic from "../../../assets/images/campus-1.jpg";
import hostel from "../../../assets/images/campus-2.png";
import library from "../../../assets/images/campus-3.png";

const heroData = [
  {
    image: hero1,
    thumbnail: academic,
    title: "Academic Block",

    subtitle: "WELCOME TO SANDIP UNIVERSITY",
    description:
      "Empowering students with quality education, innovation and global opportunities.",

    button1: "Apply Now",
    button2: "Virtual Campus Tour",
  },

  {
    image: hero2,
    thumbnail: hostel,
    title: "Hostel",

    subtitle: "WORLD CLASS EDUCATION",
    description:
      "Experience industry-oriented learning with expert faculty and modern infrastructure.",

    button1: "Explore Programs",
    button2: "Campus Tour",
  },

  {
    image: hero3,
    thumbnail: library,
    title: "Library",

    subtitle: "RESEARCH & INNOVATION",
    description:
      "Join a vibrant campus that nurtures creativity, leadership, and lifelong learning.",

    button1: "Admissions Open",
    button2: "Know More",
  },
];

export default heroData;