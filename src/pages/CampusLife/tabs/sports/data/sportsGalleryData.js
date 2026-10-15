// "A glimpse into Sandip University Sports" — real event photos.
const modules = import.meta.glob(
  "../../../../../assets/images/campus-life/sports/gallery/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const sportsGalleryImages = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop();
    return { id: filename, src };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export default sportsGalleryImages;
