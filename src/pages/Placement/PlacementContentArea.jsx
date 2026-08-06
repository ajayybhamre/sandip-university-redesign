import PlacementOverview from "./tabs/PlacementOverview";
import StudentPlacement from "./tabs/StudentPlacement";
import StudentsTestimonials from "./tabs/StudentsTestimonials";
import PlacementGalleryTab from "./tabs/PlacementGalleryTab";
import PlacementPolicy from "./tabs/PlacementPolicy";
import EmployabilityEnhancementProgram from "./tabs/EmployabilityEnhancementProgram";
import CorporateTieups from "./tabs/CorporateTieups";
import ContactCell from "./tabs/ContactCell";
import AssociatedRecruiters from "./tabs/AssociatedRecruiters";
import PlacementsRecords from "./tabs/PlacementsRecords";
import CampusToCorporate from "./tabs/CampusToCorporate";
import CampusPrideProgram from "./tabs/CampusPrideProgram";
import PlacementsFAQs from "./tabs/PlacementsFAQs";
import CareerDevelopmentCell from "./tabs/CareerDevelopmentCell";
import PlacementEvents from "./tabs/PlacementEvents";

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

      {activeTab === "student-placement" && <StudentPlacement />}

      {activeTab === "testimonials" && <StudentsTestimonials />}

      {activeTab === "gallery" && <PlacementGalleryTab />}

      {activeTab === "policy" && <PlacementPolicy />}

      {activeTab === "eep" && <EmployabilityEnhancementProgram />}

      {activeTab === "corporate-tieups" && <CorporateTieups />}

      {activeTab === "contact-cell" && <ContactCell />}

      {activeTab === "recruiters" && <AssociatedRecruiters />}

      {activeTab === "records" && <PlacementsRecords />}

      {activeTab === "campus-to-corporate" && <CampusToCorporate />}

      {activeTab === "campus-pride" && <CampusPrideProgram />}

      {activeTab === "faqs" && <PlacementsFAQs />}

      {activeTab === "career-dev" && <CareerDevelopmentCell />}

      {activeTab === "events" && <PlacementEvents />}

    </div>
  );
}
