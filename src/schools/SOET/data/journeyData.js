/*
  One block per school. The key is the "slug" you pass to <JourneyTimeline slug="..." />.
  Add a new school by copying a block, changing the key, and swapping the imports.

  Adjust the "../../../assets/images/..." depth to match where this file actually
  lives relative to src/assets in your project (same rule as deanPortrait / soet1
  in SOET.jsx — count folders up to src, then back down into assets).
*/

// ---- SOET images ----
import soetFoundation from "../../../assets/images/journey/soet/foundation.jpg";
import soetSpecialization from "../../../assets/images/journey/soet/specialization.jpg";
import soetInternship from "../../../assets/images/journey/soet/internship.jpg";
import soetCapstone from "../../../assets/images/journey/soet/capstone.jpg";
import soetPlacement from "../../../assets/images/journey/soet/placement.jpg";

// ---- SOM images (example second school — replace/remove as needed) ----
// import somFoundation from "../../../assets/images/journey/som/foundation.jpg";
// import somSpecialization from "../../../assets/images/journey/som/specialization.jpg";
// import somInternship from "../../../assets/images/journey/som/internship.jpg";
// import somCapstone from "../../../assets/images/journey/som/capstone.jpg";
// import somPlacement from "../../../assets/images/journey/som/placement.jpg";

const journeyData = {
  soet: [
    {
      id: "y1",
      year: "Year 1",
      title: "Foundation.",
      text: "Core math, physics, and programming labs, shared across all departments.",
      image: soetFoundation,
    },
    {
      id: "y2",
      year: "Year 2",
      title: "Core Specialization.",
      text: "Department coursework begins, with the first lab-based and workshop projects.",
      image: soetSpecialization,
    },
    {
      id: "y3",
      year: "Year 3",
      title: "Live Projects & Internship.",
      text: "Industry-linked projects and a mandatory internship placement.",
      image: soetInternship,
    },
    {
      id: "y4",
      year: "Year 4",
      title: "Capstone & Research.",
      text: "Faculty-guided capstone project, with funded research tracks in select departments.",
      image: soetCapstone,
    },
    {
      id: "y5",
      year: "Placement",
      title: "Industry Transition.",
      text: "Dedicated placement cell support: resumes, interviews, and recruiter access.",
      image: soetPlacement,
    },
  ],

 
};

export default journeyData;