import CareerDevelopmentCell from "./groups/trainingCareer/CareerDevelopmentCell";
import EmployabilityEnhancement from "./groups/trainingCareer/EmployabilityEnhancement";
import CampusToCorporate from "./groups/trainingCareer/CampusToCorporate";
import CampusPrideProgram from "./groups/trainingCareer/CampusPrideProgram";

const TrainingCareerGroup = () => (
  <div className="space-y-16">

    <CareerDevelopmentCell />

    <EmployabilityEnhancement />

    <CampusToCorporate />

    <CampusPrideProgram />

  </div>
);

export default TrainingCareerGroup;
