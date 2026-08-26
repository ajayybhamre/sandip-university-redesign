import PlacementProcess from "./groups/processGuidelines/PlacementProcess";
import PlacementPolicy from "./groups/processGuidelines/PlacementPolicy";
import FAQs from "./groups/processGuidelines/FAQs";

const ProcessGuidelinesGroup = () => (
  <div className="space-y-16">

    <PlacementProcess />

    <PlacementPolicy />

    <FAQs />

  </div>
);

export default ProcessGuidelinesGroup;
