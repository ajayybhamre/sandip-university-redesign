// Pulls every real campus photo in automatically and sorts it into a
// filter category based on its filename prefix.
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/campus/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const categoryFromFilename = (filename) => {
  if (/^campus-\d+\./i.test(filename)) return "aerial";
  if (/^sport\d+\./i.test(filename)) return "sports-facilities";
  if (/^infrastructure\d+\./i.test(filename)) return "infrastructure";
  if (/^structure\d+\./i.test(filename)) return "life-at-su";
  if (/^facilities\d+\./i.test(filename)) return "other-facilities";
  return "other-facilities";
};

const campusImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return {
      id: filename,
      src,
      category: categoryFromFilename(filename),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const campusFilters = [
  { id: "all", label: "All" },
  { id: "aerial", label: "Campus Aerial View" },
  { id: "sports-facilities", label: "Sports Facilities" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "life-at-su", label: "Life @ Sandip University" },
  { id: "other-facilities", label: "Other Facilities" },
];

export default campusImages;
