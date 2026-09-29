import { motion } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Sparkles,
  FileSpreadsheet,
  Download,
  CheckCircle2,
} from "lucide-react";

import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";

export default function IQACIIQADisclosurePage() {
  const officialPdfUrl = "https://www.sandipuniversity.edu.in/iqac/images/Self-Declaration_Merged.pdf";

  return (
    <IQACSubPageLayout
      seo={seoData.iqacIIQA}
      badge="ACCREDITATION & SELF DISCLOSURE"
      title="IIQA Self Disclosure"
      subtitle="Institutional Information for Quality Assessment (IIQA) statutory self disclosure document."
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Sidebar Column */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
          
          {/* Primary Document Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#1C1A17] rounded-3xl p-6 sm:p-8 border border-[#EFE5D2] dark:border-amber-900/40 shadow-md border-t-4 border-t-[#C9A227] space-y-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#EFE5D2] dark:border-amber-900/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60">
                  Official Document Archive
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-[#C8102E] dark:text-red-400 border border-red-200 dark:border-red-900/60 text-xs font-bold uppercase tracking-wider font-mono">
                <FileText size={13} />
                <span>PDF Document</span>
              </span>
            </div>

            {/* Document Details Showcase */}
            <div className="grid sm:grid-cols-12 gap-6 items-center">
              
              {/* Document Badge Visual */}
              <div className="sm:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#F8F3E8] dark:bg-amber-950/20 border border-[#EFE5D2] dark:border-amber-900/40 text-center relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#24201C] border border-[#C9A227]/40 flex items-center justify-center text-[#C8102E] dark:text-amber-400 shadow-md mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FileSpreadsheet size={32} />
                </div>
                <span className="text-[10px] font-mono font-extrabold text-[#C9A227] uppercase tracking-wider bg-white dark:bg-[#1E1B18] px-2.5 py-0.5 rounded-full border border-amber-300/60 shadow-2xs mb-1">
                  PDF • Official Document
                </span>
                <h4 className="text-xs font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8]">
                  Self Disclosure
                </h4>
              </div>

              {/* Document Meta Info & CTA */}
              <div className="sm:col-span-8 space-y-4">
                <div>
                  <p className="text-xs font-mono font-bold text-[#C9A227] uppercase tracking-wider mb-1">
                    IIQA Self Disclosure
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif leading-tight">
                    Self Disclosure Document
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#6B665E] dark:text-amber-100/80 leading-relaxed">
                  Official Self Disclosure document of Sandip University. Verified and approved by the Internal Quality Assurance Cell (IQAC) secretariat in compliance with statutory accreditation guidelines.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={officialPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-black transition-all duration-300 group"
                  >
                    <span>View IIQA Self Disclosure</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={officialPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#92400E] dark:text-amber-300 border border-amber-300/80 dark:border-amber-700/50 font-bold text-xs sm:text-sm hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-all duration-200"
                  >
                    <Download size={15} className="text-[#C9A227]" />
                    <span>Open Document</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Verification Banner */}
            <div className="p-4 rounded-2xl bg-[#F8F3E8] dark:bg-amber-950/20 border border-[#C9A227]/40 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#C9A227] flex-shrink-0" />
              <p className="text-xs text-[#1F1F1F] dark:text-amber-100 font-medium leading-relaxed">
                Statutory Compliance Declaration: All disclosures published in this document are authentic and verified by Sandip University IQAC.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </IQACSubPageLayout>
  );
}
