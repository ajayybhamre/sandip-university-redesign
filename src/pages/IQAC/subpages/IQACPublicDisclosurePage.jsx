import { FileSpreadsheet, Download, ShieldCheck, CheckCircle2 } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const mandatoryDisclosures = [
  {
    title: "UGC Section 2(f) Recognition Document",
    description: "Official University Grants Commission (UGC) notification granting statutory university status under Section 2(f) of UGC Act 1956.",
    authority: "UGC Govt of India",
    fileSize: "1.1 MB",
  },
  {
    title: "Sandip University State Charter Act Document",
    description: "Maharashtra State Legislature Act establishing Sandip University as a statutory private university in Nashik.",
    authority: "Govt of Maharashtra",
    fileSize: "2.8 MB",
  },
  {
    title: "AICTE Approval Letters for Engineering & Pharmacy",
    description: "All India Council for Technical Education (AICTE) annual extension of approval (EOA) letters.",
    authority: "AICTE New Delhi",
    fileSize: "1.9 MB",
  },
  {
    title: "Pharmacy Council of India (PCI) Approval",
    description: "PCI approval notifications for D.Pharm, B.Pharm, and M.Pharm programs offered under School of Pharmacy.",
    authority: "PCI Govt of India",
    fileSize: "890 KB",
  },
  {
    title: "Bar Council of India (BCI) Approval for Law",
    description: "BCI statutory approval for 3-Year LL.B. and 5-Year Integrated B.A. LL.B. / B.B.A. LL.B. degree programs.",
    authority: "BCI New Delhi",
    fileSize: "750 KB",
  },
  {
    title: "Fee Regulation Committee Approval Notification",
    description: "State Fee Regulation Authority approval letters for transparent course fee structures.",
    authority: "Fee Authority MS",
    fileSize: "620 KB",
  },
];

export default function IQACPublicDisclosurePage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacPublicDisclosure}
      badge="STATUTORY COMPLIANCE & PUBLIC DISCLOSURES"
      title="Mandatory Public Disclosures"
      subtitle="Public repository of statutory approvals, UGC 2(f) recognitions, state charter act documents, AICTE approvals, and regulatory council notifications."
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mandatoryDisclosures.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                    <FileSpreadsheet size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase font-mono">
                    {item.authority}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500">
                <span className="font-mono">{item.fileSize}</span>
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading public disclosure: ${item.title}`);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-[#C8102E] font-bold hover:bg-[#C8102E] hover:text-white transition-all shadow-xs"
                >
                  <Download size={13} />
                  <span>View PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
