import YearWisePlacementCount from "./groups/statsRecords/YearWisePlacementCount";
import StudentPlacementGallery from "./groups/statsRecords/StudentPlacementGallery";

const StatsRecordsGroup = () => (
  <div className="space-y-16">

    <YearWisePlacementCount />

    <StudentPlacementGallery />

  </div>
);

export default StatsRecordsGroup;
