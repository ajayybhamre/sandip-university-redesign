import { useState, useMemo } from "react";

import FilterChips from "./shared/FilterChips";
import PhotoGrid from "./shared/PhotoGrid";
import eventImages, { eventFilters } from "./data/eventGalleryData";

const EventGallery = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return eventImages;
    return eventImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>

      <FilterChips
        filters={eventFilters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <PhotoGrid images={filteredImages} />

    </div>
  );
};

export default EventGallery;
