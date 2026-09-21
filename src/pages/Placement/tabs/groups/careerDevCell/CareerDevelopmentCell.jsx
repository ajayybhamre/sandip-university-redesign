import CareerOverview from "./CareerOverview";
import SuperDreamCareers from "./SuperDreamCareers";
import ValueAdditionPrograms from "./ValueAdditionPrograms";
import Internships from "./Internships";
import TrendsAwareness from "./TrendsAwareness";
import CompetitiveExams from "./CompetitiveExams";
import CombinedSkills from "./CombinedSkills";

const CareerDevelopmentCell = () => (
  <div className="space-y-20">

    <CareerOverview />

    <SuperDreamCareers />

    <ValueAdditionPrograms />

    <Internships />

    <TrendsAwareness />

    <CompetitiveExams />

    <CombinedSkills />

  </div>
);

export default CareerDevelopmentCell;
