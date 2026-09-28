import PhdSubPage from "./sections/PhdSubPage";
import PdfCard from "./shared/PdfCard";
import { undertakingDoc } from "./data/infoAndUndertakingData";

export default function PhdUndertaking() {
  return (
    <PhdSubPage
      seo={{
        title: "Undertaking regarding Compliance of UGC Standing Committee | Sandip University",
        description: "Undertaking regarding Compliance of UGC Standing Committee — Sandip University.",
        keywords: "Sandip University UGC Standing Committee Undertaking",
        image: "https://yourdomain.com/phd.jpg",
        url: "https://yourdomain.com/phd/undertaking",
      }}
      title="Undertaking regarding Compliance of UGC Standing Committee"
      description="Undertaking regarding Compliance of UGC Standing Committee."
      currentPage="UGC Undertaking"
    >
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
        Undertaking regarding Compliance of UGC Standing Committee
      </h2>
      <PdfCard title={undertakingDoc.title} href={undertakingDoc.href} />
    </PhdSubPage>
  );
}
