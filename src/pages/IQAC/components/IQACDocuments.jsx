import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, Filter, Calendar, CheckCircle } from "lucide-react";

const documentCategories = [
  { id: "all", label: "All Documents" },
  { id: "aqar", label: "AQAR Reports" },
  { id: "minutes", label: "Minutes of Meetings" },
  { id: "policy", label: "Policies & Manuals" },
  { id: "naac", label: "SSR & Accreditation" },
];

const documentsList = [
  {
    category: "aqar",
    title: "Annual Quality Assurance Report (AQAR) 2024-25",
    description: "Comprehensive institutional quality report submitted to NAAC covering academic metrics, research, and governance.",
    date: "2025-01-15",
    fileSize: "2.4 MB",
    fileType: "PDF Document",
  },
  {
    category: "aqar",
    title: "Annual Quality Assurance Report (AQAR) 2023-24",
    description: "Annual progress report on quality benchmarks, curriculum outcomes, and infrastructure enhancements.",
    date: "2024-01-20",
    fileSize: "2.1 MB",
    fileType: "PDF Document",
  },
  {
    category: "minutes",
    title: "IQAC Committee Meeting Minutes — Q4 2024",
    description: "Official proceedings and resolution records of the fourth quarterly IQAC committee review.",
    date: "2024-12-10",
    fileSize: "850 KB",
    fileType: "PDF Document",
  },
  {
    category: "minutes",
    title: "IQAC Committee Meeting Minutes — Q3 2024",
    description: "Minutes covering academic audit findings, stakeholder feedback review, and outcome assessment.",
    date: "2024-09-18",
    fileSize: "920 KB",
    fileType: "PDF Document",
  },
  {
    category: "policy",
    title: "Institutional Quality Policy & Guidelines Manual",
    description: "Statutory manual detailing university quality benchmarks, BoS evaluation procedures, and OBE policies.",
    date: "2024-06-01",
    fileSize: "3.5 MB",
    fileType: "PDF Document",
  },
  {
    category: "policy",
    title: "Feedback System & Governance SOP",
    description: "Standard Operating Procedure for collecting and analyzing student, employer, and faculty feedback.",
    date: "2024-04-12",
    fileSize: "1.1 MB",
    fileType: "PDF Document",
  },
  {
    category: "naac",
    title: "NAAC Self Study Report (SSR) Executive Summary",
    description: "Institutional accreditation overview detailing criteria-wise key performance indicators.",
    date: "2024-03-05",
    fileSize: "4.8 MB",
    fileType: "PDF Document",
  },
  {
    category: "naac",
    title: "Academic & Administrative Audit (AAA) Report",
    description: "External peer committee audit evaluation findings and quality recommendation roadmap.",
    date: "2024-02-14",
    fileSize: "1.8 MB",
    fileType: "PDF Document",
  },
];

export default function IQACDocuments() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDocs =
    activeCategory === "all"
      ? documentsList
      : documentsList.filter((doc) => doc.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-[#161411] transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900">
              05 — PUBLIC REPOSITORY
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
            IQAC Documents & <span className="text-[#C8102E]">Reports</span>
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Access official Annual Quality Assurance Reports (AQAR), committee meeting proceedings, institutional policies, and accreditation records.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {documentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#C8102E] text-white shadow-md scale-105"
                  : "bg-[#FAF7F2] dark:bg-[#201C18] text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950/40 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Documents Listing Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] dark:bg-[#1E1B18] rounded-2xl p-6 border border-[#EAE3D7] dark:border-[#2C2720] hover:border-amber-300/80 dark:hover:border-amber-700/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                      <FileText size={22} />
                    </div>

                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                      {doc.fileType}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar size={13} className="text-[#C8102E]" />
                    <span>{doc.date}</span>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <span>{doc.fileSize}</span>
                  </div>

                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading official document: ${doc.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#28231E] border border-gray-300 dark:border-gray-700 text-[#C8102E] dark:text-red-400 font-bold hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] dark:hover:text-white transition-all shadow-xs"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
