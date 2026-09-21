import PhotoGrid from "./shared/PhotoGrid";
import mediaCoverageImages from "./data/mediaCoverageData";

const MediaCoverage = () => (
  <div>
    <PhotoGrid images={mediaCoverageImages} />
  </div>
);

export default MediaCoverage;
