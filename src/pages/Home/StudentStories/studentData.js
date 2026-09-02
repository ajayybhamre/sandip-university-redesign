import student1 from "../../../assets/images/ashwini.webp";
import student2 from "../../../assets/images/gayatri.png";
import student3 from "../../../assets/images/pawan.png";
import student4 from "../../../assets/images/riya.png";

import microsoftLogo from "../../../assets/images/accenture.png";
import amazonLogo from "../../../assets/images/deloite.png";
import mitLogo from "../../../assets/images/kotak.png";

const students = [
  {
    name: "Ashwini Shinde",
    course: "B.Tech CSE",
    achievement: "Software Engineer",
    company: "Microsoft",
    package: "32 LPA",
    image: student1,
    logo: microsoftLogo,
    category: "Placement"
  },
  {
    name: "Sneha Kulkarni",
    course: "MBA",
    achievement: "Business Analyst",
    company: "Amazon",
    package: "24 LPA",
    image: student2,
    logo: amazonLogo,
    category: "Placement"
  },
  {
    name: "Amit Sharma",
    course: "M.Tech AI",
    achievement: "Research Scholar",
    company: "MIT USA",
    package: "22 LPA",
    image: student3,
    logo: mitLogo,
    category: "Higher Studies"
  },
  {
    name: "Riya Gupta",
    course: "BBA",
    achievement: "Startup Founder",
    company: "Entrepreneur",
    package: "20 LPA",
    image: student4,
    logo: microsoftLogo,
    category: "Startup"
  }
];

export default students;