import HighlightsBanner from "./overview/HighlightsBanner";
import TopAchievers from "./overview/TopAchievers";
import StatsStrip from "./overview/StatsStrip";
import RecruitersSliders from "./overview/RecruitersSliders";
import PlacementSummary from "./overview/PlacementSummary";

const PlacementOverview = () => {
  return (
    <div className="space-y-14">

      <HighlightsBanner />

      <TopAchievers />

      <StatsStrip />

      <RecruitersSliders />

      <PlacementSummary />

    </div>
  );
};

export default PlacementOverview;
