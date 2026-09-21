import PlacementOverview from "./tabs/PlacementOverview";
import StatsRecordsGroup from "./tabs/StatsRecordsGroup";
import TrainingEmployabilityGroup from "./tabs/TrainingEmployabilityGroup";
import CareerDevCellTab from "./tabs/CareerDevCellTab";
import CampusPrideTab from "./tabs/CampusPrideTab";
import ProcessGuidelinesGroup from "./tabs/ProcessGuidelinesGroup";
import SuccessStoriesGroup from "./tabs/SuccessStoriesGroup";
import PlacementCellGroup from "./tabs/PlacementCellGroup";

export default function PlacementContentArea({ activeTab }) {
  return (
    <div
      className="
        bg-white
        dark:bg-[#111111]
        border
        border-red-100
        dark:border-red-900
        rounded-3xl
        shadow-lg
        p-8
        lg:p-10
        min-h-[500px]
        transition-colors
        duration-300
      "
    >

      {activeTab === "overview" && <PlacementOverview />}

      {activeTab === "stats-records" && <StatsRecordsGroup />}

      {activeTab === "training-employability" && <TrainingEmployabilityGroup />}

      {activeTab === "career-dev-cell" && <CareerDevCellTab />}

      {activeTab === "campus-pride" && <CampusPrideTab />}

      {activeTab === "process-guidelines" && <ProcessGuidelinesGroup />}

      {activeTab === "success-stories" && <SuccessStoriesGroup />}

      {activeTab === "placement-cell" && <PlacementCellGroup />}

    </div>
  );
}
