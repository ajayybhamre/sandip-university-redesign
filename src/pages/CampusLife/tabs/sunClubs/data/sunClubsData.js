export const objectives = [
  "To identify & bring out the innate qualities in the students.",
  "To develop the overall personality of the students.",
  "To create awareness towards diverse global culture.",
  "To provide a healthy, pragmatic & innovative learning atmosphere.",
];

export const clubCategories = [
  {
    id: "tech",
    title: "Tech Clubs",
    description: "Clubs built around coding, robotics, electronics and emerging technology.",
  },
  {
    id: "liberal-arts",
    title: "Liberal Arts Clubs",
    description: "Clubs for literature, fine arts, music, dance, drama and design.",
  },
  {
    id: "societal-responsibility",
    title: "Societal Responsibility Clubs",
    description: "Clubs focused on community service, sustainability and social awareness.",
  },
  {
    id: "excursion-outdoor",
    title: "Excursion and Outdoor Activities Clubs",
    description: "Clubs for trekking, adventure sports and outdoor exploration.",
  },
  {
    id: "ndli",
    title: "NDLI Club",
    description: "National Digital Library of India Club — promoting digital reading resources.",
  },
];

// Reuses the real "Life @ Sandip University" campus photos (the only
// photo set supplied that fits club/student-life imagery) instead of
// any separate placeholder pool.
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/campus/structure*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

export const clubGalleryImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return { id: filename, src };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
