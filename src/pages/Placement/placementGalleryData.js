import campus1 from "../../assets/images/gallery1.jpg";
import campus2 from "../../assets/images/gallery2.jpg";

import workshop1 from "../../assets/images/gallery3.jpg";
import workshop2 from "../../assets/images/gallery4.jpg";

import internship1 from "../../assets/images/gallery1.jpg";
import internship2 from "../../assets/images/gallery2.jpg";

import recruiter1 from "../../assets/images/gallery3.jpg";
import recruiter2 from "../../assets/images/gallery4.jpg";

const placementGalleryData = {
  campus: [
    {
      id: 1,
      image: campus1,
      title: "Campus Recruitment Drive",
      description: "Top recruiters conducted interviews for final-year students.",
      link: "/gallery"
    },
    {
      id: 2,
      image: campus2,
      title: "Mega Placement Event",
      description: "More than 50 companies participated.",
      link: "/gallery"
    }
  ],

  workshop: [
    {
      id: 1,
      image: workshop1,
      title: "Resume Building Workshop",
      description: "Professional resume preparation session."
    },
    {
      id: 2,
      image: workshop2,
      title: "Soft Skill Training",
      description: "Communication and personality development."
    }
  ],

  internship: [
    {
      id: 1,
      image: internship1,
      title: "Summer Internship",
      description: "Students completed internships in leading companies."
    },
    {
      id: 2,
      image: internship2,
      title: "Industrial Training",
      description: "Hands-on learning with industry experts."
    }
  ],

  recruiters: [
    {
      id: 1,
      image: recruiter1,
      title: "Google Campus Drive",
      description: "Google visited for software roles."
    },
    {
      id: 2,
      image: recruiter2,
      title: "Microsoft Recruitment",
      description: "Hiring for product development."
    }
  ]
};

export default placementGalleryData;