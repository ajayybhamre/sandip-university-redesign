import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import DocumentItemRow from "../../components/DocumentItem/DocumentItemRow";
import {
  DOCUMENT_CATEGORIES,
  DOCUMENTS_MASTER_LIST,
  DOCUMENT_FAQS
} from "./DocumentChecklist/documentChecklistData";
import {
  Download,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Check,
  AlertCircle,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Phone,
  FileText
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function DocumentList() {
  // State for tracked checked document IDs (persisted in localStorage)
  const [checkedDocIds, setCheckedDocIds] = useState(() => {
    try {
      const saved = localStorage.getItem("sandip_admission_checked_docs");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // State for filter toggle: "Show only required documents"
  const [showOnlyRequired, setShowOnlyRequired] = useState(false);

  // State for expanded categories (default all expanded on first load)
  const [expandedCategories, setExpandedCategories] = useState({
    academic: true,
    identity: true,
    category: true,
    additional: true
  });

  // State for expanded document notes
  const [expandedNotes, setExpandedNotes] = useState({});

  // State for FAQ Accordion
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Persist checked documents to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "sandip_admission_checked_docs",
        JSON.stringify(Array.from(checkedDocIds))
      );
    } catch (e) {
      console.error("Could not save checked documents", e);
    }
  }, [checkedDocIds]);

  // Toggle individual document checked status
  const toggleDocumentCheck = (docId) => {
    setCheckedDocIds((prev) => {
      const next = new Set(prev);
      if (next.has(docId)) {
        next.delete(docId);
      } else {
        next.add(docId);
      }
      return next;
    });
  };

  // Toggle Category Expand/Collapse
  const toggleCategoryExpand = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Toggle Document Notes Expand/Collapse
  const toggleNoteExpand = (docId) => {
    setExpandedNotes((prev) => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  // Clear All action
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all document checkmarks?")) {
      setCheckedDocIds(new Set());
    }
  };

  // Download Checklist action (Print / Save Checklist view)
  const handleDownloadChecklist = () => {
    window.print();
  };

  // Filtered documents list based on "Show only required"
  const visibleDocuments = useMemo(() => {
    if (showOnlyRequired) {
      return DOCUMENTS_MASTER_LIST.filter((doc) => doc.required);
    }
    return DOCUMENTS_MASTER_LIST;
  }, [showOnlyRequired]);

  // Overall Completion Calculations
  const totalCount = visibleDocuments.length;
  const checkedCount = visibleDocuments.filter((doc) => checkedDocIds.has(doc.id)).length;
  const completionPercentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isAllSet = totalCount > 0 && checkedCount === totalCount;

  return (
    <>
      <SEO
        title="Required Documents for Admission | Sandip University"
        description="Interactive admission document checklist system for Sandip University. Track, organize, and prepare academic, identity, category, and additional documents."
      />

      <Header />

      <main className="bg-[#FBFBFA] text-[#0F1B2B] min-h-screen font-sans selection:bg-[#2DD4BF] selection:text-[#0F1B2B] pt-20">

        {/* ==========================================
            1. HERO SECTION (Cream to Pale Blue Gradient)
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FBFBFA] via-[#F0F7FF] to-[#FBFBFA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-[#2DD4BF]/10 via-[#0F1B2B]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-[6px] bg-white border border-slate-200 text-xs font-semibold text-[#0F1B2B] shadow-2xs"
            >
              <Sparkles size={14} className="text-[#0D9488]" />
              <span>Admission Document Tracker 2026–27</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[48px] font-bold font-serif text-[#0F1B2B] tracking-tight leading-tight"
            >
              Required Documents for Admission
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Complete checklist of all documents needed for your admission process. Organize, track, and prepare everything in one place.
            </motion.p>
          </div>
        </section>

        {/* ==========================================
            2. PROGRESS & CONTROLS SECTION (STICKY)
        ========================================== */}
        <section className="sticky top-0 z-30 bg-white border-b border-[#E2E8F0] shadow-sm py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            
            {/* Overall Completion Box */}
            <div className="p-4 bg-[#0F1B2B]/5 border border-[#0F1B2B]/20 rounded-[8px] space-y-3">
              <div className="flex items-center justify-between gap-4">
                {/* Left Side */}
                <div>
                  <span className="text-[12px] font-semibold text-[#667085] uppercase tracking-wider block">
                    Overall Completion
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B]">
                    {completionPercentage}%
                  </span>
                </div>

                {/* Right Side */}
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-medium text-[#667085] block">
                    {checkedCount} of {totalCount} documents
                  </span>
                  {isAllSet && (
                    <span className="text-xs sm:text-sm font-bold text-[#0D9488] flex items-center justify-end gap-1">
                      <Check size={16} /> All set!
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[12px] bg-[#E2E8F0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#0F1B2B] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              
              {/* Left Checkbox Control */}
              <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-medium text-[#0F1B2B] select-none">
                <input
                  type="checkbox"
                  checked={showOnlyRequired}
                  onChange={(e) => setShowOnlyRequired(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#0F1B2B] focus:ring-[#0D9488] cursor-pointer"
                />
                <span>Show only required documents</span>
              </label>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleDownloadChecklist}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded.5 text-xs font-semibold text-[#0F1B2B] bg-white border border-[#E2E8F0] hover:bg-slate-100 rounded-[8px] transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Checklist</span>
                </button>

                <button
                  onClick={handleClearAll}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded.5 text-xs font-semibold text-white bg-[#0F1B2B] hover:bg-[#1a2c42] rounded-[8px] transition-colors cursor-pointer shadow-2xs"
                >
                  <RotateCcw size={14} />
                  <span>Clear All</span>
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ==========================================
            3. DOCUMENT CATEGORIES (MAIN CONTENT)
        ========================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {DOCUMENT_CATEGORIES.map((cat) => {
            const categoryDocs = visibleDocuments.filter((doc) => doc.category === cat.id);
            if (categoryDocs.length === 0 && showOnlyRequired) return null;

            const categoryCheckedCount = categoryDocs.filter((doc) => checkedDocIds.has(doc.id)).length;
            const categoryTotalCount = categoryDocs.length;
            const catPercentage = categoryTotalCount > 0 ? Math.round((categoryCheckedCount / categoryTotalCount) * 100) : 0;
            const isExpanded = !!expandedCategories[cat.id];

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-[12px] border overflow-hidden transition-shadow ${cat.borderClass} bg-white shadow-2xs hover:shadow-md`}
              >
                {/* Category Header (Always Visible, Clickable) */}
                <div
                  onClick={() => toggleCategoryExpand(cat.id)}
                  className={`${cat.bgClass} p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none hover:opacity-90 transition-opacity`}
                >
                  {/* Left Section */}
                  <div className="space-y-1">
                    <h2 className={`text-lg sm:text-xl font-bold font-serif ${cat.textClass}`}>
                      {cat.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#667085]">
                      {cat.description}
                    </p>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right hidden sm:block">
                      <span className="text-xs sm:text-sm font-bold text-[#0F1B2B]">
                        {categoryCheckedCount}/{categoryTotalCount}
                      </span>
                      <span className="text-xs text-[#667085] block">completed</span>
                    </div>

                    <div className={`p-2 rounded-full bg-white/80 text-[#0F1B2B] transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Expanded Category Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="border-t border-[#E2E8F0]"
                    >
                      <div className="p-4 sm:p-6 space-y-3 bg-white">
                        
                        {/* List of Document Cards */}
                        {categoryDocs.map((doc) => {
                          const isChecked = checkedDocIds.has(doc.id);
                          const isNoteExpanded = !!expandedNotes[doc.id];

                          return (
                            <DocumentItemRow
                              key={doc.id}
                              doc={doc}
                              isChecked={isChecked}
                              onToggleCheck={toggleDocumentCheck}
                              isNoteExpanded={isNoteExpanded}
                              onToggleNote={toggleNoteExpand}
                            />
                          );
                        })}

                        {/* Category Progress Bar at Bottom */}
                        <div className="pt-3 mt-4 border-t border-slate-200/80">
                          <div className="flex items-center justify-between text-xs font-semibold text-[#0F1B2B] mb-1.5">
                            <span>Category Completion</span>
                            <span className="text-[#667085]">{catPercentage}%</span>
                          </div>
                          <div className="w-full h-[8px] bg-[#E2E8F0] rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${cat.progressClass} rounded-full transition-all duration-300`}
                              style={{ width: `${catPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </section>

        {/* ==========================================
            4. FAQ SECTION (30% Opacity Secondary BG)
        ========================================== */}
        <section className="py-16 bg-slate-100/70 border-t border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
                Help & Guidelines
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-white rounded-[12px] border border-[#E2E8F0] divide-y divide-[#E2E8F0] overflow-hidden">
              {DOCUMENT_FAQS.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="p-5 sm:p-6">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0F1B2B] hover:text-[#0D9488] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle size={16} className="text-[#0D9488] flex-shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-[#0D9488]" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-[#667085] leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ==========================================
            5. CTA SECTION
        ========================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[16px] bg-gradient-to-r from-[#0F1B2B] via-[#14283f] to-[#0D9488] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
                Admissions 2026–27
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Ready to Apply?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Submit your document checklist and proceed to the Sandip University online application portal.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              <Link
                to="/apply"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[8px] bg-[#2DD4BF] hover:bg-[#26b8a7] text-[#0F1B2B] font-bold text-xs sm:text-sm transition-colors text-center shadow-sm"
              >
                Apply Online Now
              </Link>

              <a
                href="tel:18002122714"
                className="w-full sm:w-auto px-5 py-3.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors text-center border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>Talk to Admission Desk</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
