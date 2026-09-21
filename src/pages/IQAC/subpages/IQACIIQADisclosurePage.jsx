import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  FileText,
  ExternalLink,
  Sparkles,
  FileSpreadsheet,
  Download,
  CheckCircle2,
} from "lucide-react";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO/SEO";
import seoData from "../../../components/SEO/seoData";
import IQACCreativeCardNav from "../components/IQACCreativeCardNav";

export default function IQACIIQADisclosurePage() {
  const officialPdfUrl = "https://www.sandipuniversity.edu.in/iqac/images/Self-Declaration_Merged.pdf";

  return (
    <>
      <SEO {...seoData.iqacIIQA} />
      <Header />

      <main className="min-h-screen bg-[#FFFCF5] dark:bg-[#141210] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#F8F3E8] to-[#FFFCF5] dark:from-[#141210] dark:via-[#191714] dark:to-[#161412] pt-8 pb-10 border-b border-[#EFE5D2] dark:border-amber-900/30 border-t-4 border-t-[#C9A227]">
          {/* Subtle Ambient Gold & Red Glows */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B665E] dark:text-amber-200/70 mb-4 flex-wrap"
            >
              <Link to="/" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <Link to="/iqac" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                IQAC
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <span className="text-[#C8102E] dark:text-amber-400 font-semibold">
                IIQA Self Disclosure
              </span>
            </motion.nav>

            {/* Header Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/50 text-[11px] font-bold uppercase tracking-wider text-[#C8102E] dark:text-amber-400 mb-3 shadow-2xs">
                <Sparkles size={13} className="text-[#C9A227]" />
                <span>IQAC Statutory Disclosure</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] dark:text-[#F8F3E8] tracking-tight leading-tight mb-2 font-serif">
                IIQA Self Disclosure
              </h1>

              {/* Thin Gold Decorative Accent */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#C8102E] via-[#C9A227] to-[#EFE5D2] rounded-full mb-3" />

              <p className="text-base sm:text-lg text-[#6B665E] dark:text-amber-100/80 font-medium leading-relaxed max-w-2xl">
                Official institutional self disclosure document.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Modern IQAC Sidebar Navigation (4 Cols Desktop) */}
              <div className="lg:col-span-4 w-full">
                <IQACCreativeCardNav />
              </div>

              {/* Main Document Section (8 Cols Desktop) */}
              <div className="lg:col-span-8 space-y-8">
                
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
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
