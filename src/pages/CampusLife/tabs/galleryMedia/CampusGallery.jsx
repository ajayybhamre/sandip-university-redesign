import { useState, useMemo } from "react";

import FilterChips from "./shared/FilterChips";
import PhotoGrid from "./shared/PhotoGrid";
import campusImages, { campusFilters } from "./data/campusGalleryData";

const CampusGallery = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return campusImages;
    return campusImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>

      <FilterChips
        filters={campusFilters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <PhotoGrid images={filteredImages} />

    </div>
  );
};

export default CampusGallery;
