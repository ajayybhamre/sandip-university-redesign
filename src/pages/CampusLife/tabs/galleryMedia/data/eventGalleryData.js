// Pulls every real event photo in automatically and sorts it into a
// filter category based on its filename prefix (s = Sandipotsav,
// j = Jobfair, n = NASA Hackathon).
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/event-gallery/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const categoryFromFilename = (filename) => {
  if (/^s\d+\./i.test(filename)) return "sandipotsav-2026";
  if (/^j\d+\./i.test(filename)) return "jobfair-2026";
  if (/^n\d+\./i.test(filename)) return "nasa-hackathon-2025";
  return "sandipotsav-2026";
};

const eventImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return {
      id: filename,
      src,
      category: categoryFromFilename(filename),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const eventFilters = [
  { id: "all", label: "All" },
  { id: "sandipotsav-2026", label: "Sandipotsav 2026" },
  { id: "jobfair-2026", label: "Jobfair 2026" },
  { id: "nasa-hackathon-2025", label: "NASA Hackathon 2025" },
];

export default eventImages;
