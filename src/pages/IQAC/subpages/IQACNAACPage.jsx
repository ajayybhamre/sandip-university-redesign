import { motion } from "framer-motion";
import {
  Award,
  FileCheck,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Download,
} from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";

const naacReports = [
  {
    number: "01",
    title: "Naac Certificate",
    pdfUrl: "https://www.sandipuniversity.edu.in/pdf/approvals/NAAC-Certificate.pdf",
    icon: Award,
  },
  {
    number: "02",
    title: "DVV Clarification Report 1",
    pdfUrl: "https://www.sandipuniversity.edu.in/iqac/pdf/DVV%20Clarification%20History.pdf",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "DVV Clarification Report 2",
    pdfUrl: "https://www.sandipuniversity.edu.in/iqac/pdf/DVV%20Clarification%20History%202.pdf",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "IIQA",
    pdfUrl: "https://www.sandipuniversity.edu.in/iqac/pdf/SANDIP_UNIVERSITY_NASHIK_iiqa.pdf",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "SSR",
    pdfUrl: "https://www.sandipuniversity.edu.in/iqac/pdf/ssr.pdf",
    icon: BookOpen,
  },
];

export default function IQACNAACPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacNAAC}
      badge="QUALITY ASSURANCE FRAMEWORK"
      title="NAAC"
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Sidebar Column (~30% width) */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column (~70% width) */}
        <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
          
          {/* Report Directory Header */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-stone-200/80 dark:border-stone-800">
            <div>
              <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest block mb-1">
                ACCREDITATION & QUALITY REPORTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight">
                Naac Reports
              </h2>
            </div>
            
            {/* PDF Downloads Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-red-400 bg-red-50 dark:bg-red-950/50 border border-red-200/80 dark:border-red-900/50 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Download size={13} className="text-[#C8102E] dark:text-red-400" />
              <span>PDF Downloads Available</span>
            </div>
          </div>

          {/* 2-Column Report Cards Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {naacReports.map((report) => {
              const IconComponent = report.icon;
              return (
                <motion.div
                  key={report.number}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                  className="group relative bg-white dark:bg-[#1E1B18] rounded-2xl p-6 sm:p-8 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300 ease-out flex flex-col justify-between min-h-[180px] sm:min-h-[200px] overflow-hidden hover:-translate-y-1.5"
                >
                  {/* Subtle Red Top Accent Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Small Icon Box (Left) + Large Faded Number (Right) */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:text-white group-hover:border-[#C8102E] transition-all duration-300 shadow-2xs">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-3xl sm:text-4xl font-mono font-black text-stone-300 dark:text-stone-700 group-hover:text-[#C8102E]/20 transition-colors">
                        {report.number}
                      </span>
                    </div>

                    {/* Exact Official Report Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] dark:text-[#F5F2EB] group-hover:text-[#C8102E] dark:group-hover:text-red-400 transition-colors leading-snug mb-6">
                      {report.title}
                    </h3>
                  </div>

                  {/* Bottom Divider + CTA Section */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between mt-auto">
                    <a
                      href={report.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors"
                    >
                      <span>View Report</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                    <ExternalLink size={14} className="text-stone-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </IQACSubPageLayout>
  );
}

