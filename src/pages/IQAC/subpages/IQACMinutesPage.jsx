import { useState } from "react";
import { FileText, Download, Calendar, Filter, CheckCircle2 } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const meetingMinutesArchive = [
  {
    academicYear: "2024–25",
    title: "IQAC Committee Meeting Proceedings — Q4 2024",
    date: "December 10, 2024",
    summary: "Approval of AAA internal audit reports, review of outcome-based syllabus updates, and NIRF data submission checklist.",
    status: "Approved & Minuted",
    fileSize: "850 KB",
  },
  {
    academicYear: "2024–25",
    title: "IQAC Committee Meeting Proceedings — Q3 2024",
    date: "September 18, 2024",
    summary: "Review of 360° stakeholder feedback report, green campus audit initiatives, and seed grant approvals for research projects.",
    status: "Approved & Minuted",
    fileSize: "920 KB",
  },
  {
    academicYear: "2023–24",
    title: "IQAC Committee Meeting Proceedings — Q4 2023",
    date: "December 15, 2023",
    summary: "Finalization of AQAR 2022-23 submission to NAAC portal, faculty development program schedules, and examination review.",
    status: "Approved & Minuted",
    fileSize: "1.1 MB",
  },
  {
    academicYear: "2023–24",
    title: "IQAC Committee Meeting Proceedings — Q2 2023",
    date: "June 20, 2023",
    summary: "Curriculum revision guidelines for engineering & pharmacy schools, CBCS credit structure alignment, and MoUs.",
    status: "Approved & Minuted",
    fileSize: "980 KB",
  },
];

export default function IQACMinutesPage() {
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredMinutes =
    selectedYear === "all"
      ? meetingMinutesArchive
      : meetingMinutesArchive.filter((item) => item.academicYear === selectedYear);

  return (
    <IQACSubPageLayout
      seo={seoData.iqacMinutes}
      badge="OFFICIAL PROCEEDINGS ARCHIVE"
      title="Minutes of IQAC Meetings"
      subtitle="Official decision archives, resolutions, action taken reports (ATR), and downloadable proceedings of quarterly IQAC committee meetings."
    >
      <div className="space-y-8">
        {/* Filter Pills */}
        <div className="flex items-center gap-3">
          <Filter size={16} className="text-[#C8102E]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">Academic Year:</span>
          {["all", "2024–25", "2023–24"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                selectedYear === year
                  ? "bg-[#C8102E] text-white"
                  : "bg-white dark:bg-[#201C18] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {year === "all" ? "All Years" : year}
            </button>
          ))}
        </div>

        {/* Minutes List */}
        <div className="space-y-4 max-w-5xl">
          {filteredMinutes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                  <FileText size={22} />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-mono">
                      AY {item.academicYear}
                    </span>
                    <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">{item.summary}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading official proceedings: ${item.title}`);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#C8102E] border border-red-200 dark:border-red-900 font-bold text-xs hover:bg-[#C8102E] hover:text-white transition-all shadow-xs"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
