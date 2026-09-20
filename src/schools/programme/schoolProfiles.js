// Per-school customisation. Everything here is optional — a school that is not listed
// simply uses the defaults.
//
// Keys are the school slugs used in the URL: "engineering-technology", "computer-science",
// "management", "science", "pharma", "law", "fashion-beauty".
//
// Fields:
//   Hero              component used instead of ProgrammeHero for this school's programmes
//   sections          swap a section component (or its title / icon) for this school only:
//                       { labs: { Component: PharmacyLabsSection, title: "Practical Facilities" } }
//   sidebarTitle      heading of the sidebar card
//   sidebarSubtitle   small line under it
//
// Example:
//   import PharmacyLabsSection from "./sections/PharmacyLabsSection";
//   const schoolProfiles = {
//     pharma: { sections: { labs: { Component: PharmacyLabsSection } } },
//   };

const schoolProfiles = {};

export default schoolProfiles;
