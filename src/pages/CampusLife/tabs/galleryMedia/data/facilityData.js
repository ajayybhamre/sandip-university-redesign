// Pulls every real facility photo in automatically and sorts it into a
// filter category based on its filename prefix.
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/facility/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const categoryFromFilename = (filename) => {
  if (/^canteen\d+\./i.test(filename)) return "canteen";
  if (/^gym\d+\./i.test(filename)) return "gym";
  if (/^hostel\d+\./i.test(filename)) return "hostel";
  if (/^lab\d+\./i.test(filename)) return "laboratory";
  if (/^library\d+\./i.test(filename)) return "library";
  if (/^class\d+\./i.test(filename)) return "classrooms";
  if (/^(health|heath)\d+\./i.test(filename)) return "health";
  return "canteen";
};

const facilityImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return {
      id: filename,
      src,
      category: categoryFromFilename(filename),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export const facilityFilters = [
  { id: "all", label: "Show All" },
  { id: "canteen", label: "Canteen" },
  { id: "gym", label: "Gym" },
  { id: "hostel", label: "Hostel" },
  { id: "laboratory", label: "Laboratory" },
  { id: "library", label: "Library" },
  { id: "classrooms", label: "Classrooms" },
  { id: "health", label: "Health" },
  { id: "video", label: "Video" },
];

export const facilityVideoId = "k7_nyHwWWeE";

export default facilityImages;
