import { useState, useMemo } from "react";

import FilterChips from "./shared/FilterChips";
import PhotoGrid from "./shared/PhotoGrid";
import VideoLightbox from "./shared/VideoLightbox";
import facilityImages, { facilityFilters, facilityVideoId } from "./data/facilityData";

const FacilityGallery = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  const [videoOpen, setVideoOpen] = useState(false);

  const handleFilterChange = (filterId) => {
    if (filterId === "video") {
      setVideoOpen(true);
      return;
    }
    setActiveFilter(filterId);
  };

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return facilityImages;
    return facilityImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>

      <FilterChips
        filters={facilityFilters}
        activeFilter={activeFilter}
        setActiveFilter={handleFilterChange}
      />

      <PhotoGrid images={filteredImages} />

      <VideoLightbox
        videoId={videoOpen ? facilityVideoId : null}
        onClose={() => setVideoOpen(false)}
      />

    </div>
  );
};

export default FacilityGallery;
