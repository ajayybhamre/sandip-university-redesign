import PhdSubPage from "./sections/PhdSubPage";
import PdfCard from "./shared/PdfCard";
import { infoAboutDegreesDocs } from "./data/infoAndUndertakingData";

export default function PhdInfoDegreesAwarded() {
  return (
    <PhdSubPage
      seo={{
        title: "Information about the Ph.D. Degrees Awarded | Sandip University",
        description: "Information about the Ph.D. Degrees awarded by Sandip University, Nashik during 2020, 2021, 2022, 2023 and 2024, RAC/DRC constitution, admission and fellowship policies, and the Research Ethics Board constitution.",
        keywords: "Sandip University PhD Degrees Awarded, RAC DRC, PhD Admission Policy, Fellowship Policy, Research Ethics",
        image: "https://yourdomain.com/phd.jpg",
        url: "https://yourdomain.com/phd/info-degrees-awarded",
      }}
      title="Information about the Ph.D. Degrees Awarded"
      description="Information about the Ph.D. Degrees awarded by Sandip University, Nashik during 2020, 2021, 2022, 2023 and 2024."
      currentPage="Info on Degrees Awarded"
    >
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
        Information about the Ph.D. Degrees awarded by Sandip University, Nashik during 2020, 2021, 2022, 2023 and 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          infoAboutDegreesDocs.map((doc) => (
            <PdfCard key={doc.title} title={doc.title} href={doc.href} />
          ))
        }
      </div>
    </PhdSubPage>
  );
}
