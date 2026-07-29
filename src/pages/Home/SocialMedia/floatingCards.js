import {
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaCalendarAlt,
  FaBriefcase,
  FaCamera,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

export const floatingCards = [
  {
    id: 1,
    title: "Followers",
    value: "120K+",
    icon: FaUsers,
    position:
      "-top-8 left-8",
    animation:
      "float-one",
  },

  {
    id: 2,
    title: "Likes",
    value: "250K+",
    icon: FaHeart,
    position:
      "-top-8 right-8",
    animation:
      "float-two",
  },

  {
    id: 3,
    title: "Placements",
    value: "95%",
    icon: FaBriefcase,
    position:
      "top-1/2 -left-12",
    animation:
      "float-three",
  },

  {
    id: 4,
    title: "Student Life",
    value: "500+",
    icon: FaGraduationCap,
    position:
      "top-1/2 -right-12",
    animation:
      "float-four",
  },

  {
    id: 5,
    title: "Events",
    value: "150+",
    icon: FaCalendarAlt,
    position:
      "bottom-6 left-10",
    animation:
      "float-two",
  },

  {
    id: 6,
    title: "Gallery",
    value: "5000+",
    icon: FaCamera,
    position:
      "bottom-6 right-10",
    animation:
      "float-one",
  },

  {
    id: 7,
    title: "International",
    value: "35+ Countries",
    icon: FaGlobe,
    position:
      "top-32 left-1/3",
    animation:
      "float-three",
  },

  {
    id: 8,
    title: "Awards",
    value: "NAAC A+",
    icon: FaAward,
    position:
      "bottom-28 right-1/3",
    animation:
      "float-four",
  },
];