import PhdSubPage from "./sections/PhdSubPage";
import PhdAdmissionPanel from "./sections/PhdAdmissionPanel";

export default function PhdAdmission() {
  return (
    <PhdSubPage
      seo={{
        title: "PH.D Admission | Sandip University",
        description: "Notification, SUNPET syllabus, important dates and eligible candidates list for Ph.D admission — July 2026 batch.",
        keywords: "Sandip University PhD Admission, SUNPET, PhD Notification, PhD Important Dates",
        image: "https://yourdomain.com/phd.jpg",
        url: "https://yourdomain.com/phd/admission",
      }}
      title="PH.D Admission"
      description="Notification, SUNPET syllabus, important dates and the SUNPET eligible-candidates list for the July 2026 batch."
      currentPage="PH.D Admission"
    >
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
        PH.D Admission
      </h2>
      <PhdAdmissionPanel />
    </PhdSubPage>
  );
}
