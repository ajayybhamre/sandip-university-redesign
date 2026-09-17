// Pulls in every scanned press clipping automatically.
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/media-coverage/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const mediaCoverageImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return { id: filename, src };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export default mediaCoverageImages;
