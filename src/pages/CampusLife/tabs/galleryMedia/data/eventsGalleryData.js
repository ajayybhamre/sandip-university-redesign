// TODO: replace this generic pool with the actual event photo folders
// (Sandipotsav 2026, Jobfair 2026, NASA Hackathon 2025) once supplied.
import campus1 from "../../../../../assets/images/campus-1.jpg";
import campus2 from "../../../../../assets/images/campus-2.png";
import campus3 from "../../../../../assets/images/campus-3.png";
import gallery1 from "../../../../../assets/images/gallery1.jpg";
import gallery2 from "../../../../../assets/images/gallery2.jpg";
import gallery3 from "../../../../../assets/images/gallery3.jpg";
import gallery4 from "../../../../../assets/images/gallery4.jpg";

const pool = [campus1, campus2, campus3, gallery1, gallery2, gallery3, gallery4];

const buildImages = (count, categoryId) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${categoryId}-${i + 1}`,
    src: pool[(i + count) % pool.length],
    category: categoryId,
  }));

export const eventFilters = [
  { id: "all", label: "All" },
  { id: "sandipotsav-2026", label: "Sandipotsav 2026" },
  { id: "jobfair-2026", label: "Jobfair 2026" },
  { id: "nasa-hackathon-2025", label: "NASA Hackathon 2025" },
];

const eventImages = [
  ...buildImages(28, "sandipotsav-2026"),
  ...buildImages(15, "jobfair-2026"),
  ...buildImages(10, "nasa-hackathon-2025"),
];

export default eventImages;
