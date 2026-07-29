import campus1 from "../../assets/images/gallery1.jpg";
import campus2 from "../../assets/images/gallery2.jpg";

import placement1 from "../../assets/images/gallery3.jpg";
import placement2 from "../../assets/images/gallery4.jpg";

import workshop1 from "../../assets/images/gallery1.jpg";
import workshop2 from "../../assets/images/gallery2.jpg";

export const galleryTabs = [
  {
    id: "campus",
    label: "Campus",
  },
  {
    id: "placements",
    label: "Placements",
  },
  {
    id: "workshops",
    label: "Workshops",
  },
];

export const galleryImages = [
  {
    id: 1,
    category: "campus",
    image: campus1,
    title: "Campus View",
    description: "Beautiful university campus.",
  },
  {
    id: 2,
    category: "campus",
    image: campus2,
    title: "Green Campus",
    description: "Modern infrastructure.",
  },
  {
    id: 3,
    category: "placements",
    image: placement1,
    title: "Campus Drive",
    description: "Recruitment process.",
  },
  {
    id: 4,
    category: "placements",
    image: placement2,
    title: "Interview Round",
    description: "Technical Interview.",
  },
  {
    id: 5,
    category: "workshops",
    image: workshop1,
    title: "AI Workshop",
    description: "Hands-on training.",
  },
  {
    id: 6,
    category: "workshops",
    image: workshop2,
    title: "Coding Session",
    description: "Programming Workshop.",
  },
];
export default galleryTabs;

