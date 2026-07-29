import {
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineCalendarDays,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlinePhone,
} from "react-icons/hi2";

const quickLinks = [
  {
    id: 1,
    title: "Explore School",
    subtitle: "Explore Now",
    icon: HiOutlineAcademicCap,
    target: "about",
  },
  {
    id: 2,
    title: "Scholarships",
    subtitle: "Financial Support",
    icon: HiOutlineCurrencyDollar,
    target: "scholarships",
  },
  {
    id: 3,
    title: "Events",
    subtitle: "Explore Now",
    icon: HiOutlineCalendarDays,
    target: "events",
  },
  {
    id: 4,
    title: "Brochure",
    subtitle: "Download",
    icon: HiOutlineDocumentText,
    target: "brochure",
  },
  {
    id: 5,
    title: "Virtual Tour",
    subtitle: "360° Experience",
    icon: HiOutlineGlobeAlt,
    target: "campus360",
  },
  {
    id: 6,
    title: "Contact Us",
    subtitle: "Get in Touch",
    icon: HiOutlinePhone,
    target: "contact",
  },
];

export default quickLinks;


//  const scrollToSection = (id)=>{

//     const section = document.getElementById(id);

//     if(section){
//       section.scrollIntoView({
//         behavior:"smooth",
//         block:"start"
//       });
//     }

//   };