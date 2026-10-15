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
    path: "/schools",
    isAnchor: false,
  },
  {
    id: 2,
    title: "Scholarships",
    subtitle: "Financial Support",
    icon: HiOutlineCurrencyDollar,
    path: "/scholarships",
    isAnchor: false,
  },
  {
    id: 3,
    title: "Events",
    subtitle: "Explore Now",
    icon: HiOutlineCalendarDays,
    path: "/campus-life",
    isAnchor: false,
  },
  {
    id: 4,
    title: "Brochure",
    subtitle: "Download",
    icon: HiOutlineDocumentText,
    path: "/brochure",
    isAnchor: false,
  },
  {
    id: 5,
    title: "Virtual Tour",
    subtitle: "360° Experience",
    icon: HiOutlineGlobeAlt,
    path: "#campus-tour",
    isAnchor: true,
  },
  {
    id: 6,
    title: "Contact Us",
    subtitle: "Get in Touch",
    icon: HiOutlinePhone,
    path: "/contact",
    isAnchor: false,
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