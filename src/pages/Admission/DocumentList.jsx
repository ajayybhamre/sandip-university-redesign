import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import DocumentItemRow from "../../components/DocumentItem/DocumentItemRow";
import CharacterReveal from "../../components/Animated/CharacterReveal";
import MagneticButton from "../../components/Animated/MagneticButton";
import SpotlightCard from "../../components/Animated/SpotlightCard";
import TiltCard from "../../components/Animated/TiltCard";
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

  // State for expanded categories
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

  const toggleCategoryExpand = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const toggleNoteExpand = (docId) => {
    setExpandedNotes((prev) => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all document checkmarks?")) {
      setCheckedDocIds(new Set());
    }
  };

  const handleDownloadChecklist = () => {
    window.print();
  };

  const visibleDocuments = useMemo(() => {
    if (showOnlyRequired) {
      return DOCUMENTS_MASTER_LIST.filter((doc) => doc.required);
    }
    return DOCUMENTS_MASTER_LIST;
  }, [showOnlyRequired]);

  const totalCount = visibleDocuments.length;
  const checkedCount = visibleDocuments.filter((doc) => checkedDocIds.has(doc.id)).length;
  const completionPercentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isAllSet = totalCount > 0 && checkedCount === totalCount;

  return (
    <>
      <SEO
        title="Required Admission Documents Checklist | Sandip University"
        description="Interactive admission document tracker for Sandip University. Organize, track, and verify academic, identity, and category documents."
      />

      <Header />

      <main className="bg-[#FAF8F5] text-slate-900 min-h-screen font-sans selection:bg-[#C8102E] selection:text-white pt-20">

        {/* ==========================================
            1. HERO SECTION (Red / Black / White Theme)
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 overflow-hidden">
          
          {/* Ambient Crimson Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#C8102E] uppercase tracking-wider shadow-2xs">
              <Sparkles size={14} className="text-[#C8102E]" />
              <span>ADMISSION DOCUMENT TRACKER 2026–27</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Required Documents <span className="text-[#C8102E]">Checklist</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Complete interactive checklist of all documents needed for your admission process. Track, verify, and prepare everything in one place.
            </p>
          </div>
        </section>

        {/* ==========================================
            2. PROGRESS & CONTROLS SECTION (Sticky)
        ========================================== */}
        <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            
            {/* Overall Completion Box with Glassmorphism */}
            <SpotlightCard className="p-5 bg-slate-900 text-white rounded-2xl space-y-3 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                    Overall Completion Roadmap
                  </span>
                  <span className="text-3xl font-black text-white">
                    {completionPercentage}%
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs sm:text-sm font-bold text-slate-300 block">
                    {checkedCount} of {totalCount} documents verified
                  </span>
                  {isAllSet && (
                    <span className="text-xs sm:text-sm font-black text-emerald-400 flex items-center justify-end gap-1">
                      <Check size={16} /> All Documents Ready!
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#C8102E] via-amber-500 to-[#C8102E] rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_#C8102E]"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </SpotlightCard>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              
              <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-bold text-slate-900 select-none">
                <input
                  type="checkbox"
                  checked={showOnlyRequired}
                  onChange={(e) => setShowOnlyRequired(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#C8102E] focus:ring-[#C8102E] cursor-pointer"
                />
                <span>Show only required documents</span>
              </label>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <MagneticButton onClick={handleDownloadChecklist}>
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer shadow-xs">
                    <Download size={14} />
                    <span>Download Checklist</span>
                  </button>
                </MagneticButton>

                <MagneticButton onClick={handleClearAll}>
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C8102E] hover:bg-red-700 transition-colors cursor-pointer shadow-md">
                    <RotateCcw size={14} />
                    <span>Clear All</span>
                  </button>
                </MagneticButton>
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
              <TiltCard key={cat.id} className="w-full">
                <div className="rounded-3xl border border-slate-200/90 overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
                  
                  {/* Category Header */}
                  <div
                    onClick={() => toggleCategoryExpand(cat.id)}
                    className="p-6 bg-slate-50 hover:bg-red-50/40 border-b border-slate-200 cursor-pointer flex items-center justify-between gap-4 select-none transition-colors"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                        <span>{cat.name}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {cat.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right hidden sm:block">
                        <span className="text-xs sm:text-sm font-black text-slate-900">
                          {categoryCheckedCount}/{categoryTotalCount}
                        </span>
                        <span className="text-xs text-slate-500 font-bold block">verified</span>
                      </div>

                      <div className={`p-2 rounded-full bg-white text-slate-900 border border-slate-200 transition-transform duration-200 ${isExpanded ? "rotate-90 text-[#C8102E]" : ""}`}>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="border-t border-slate-100"
                      >
                        <div className="p-6 space-y-4 bg-white">
                          
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

                          {/* Category Progress Bar */}
                          <div className="pt-3 mt-4 border-t border-slate-100">
                            <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                              <span>Category Progress</span>
                              <span className="text-[#C8102E]">{catPercentage}%</span>
                            </div>
                            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#C8102E] to-amber-500 rounded-full transition-all duration-300"
                                style={{ width: `${catPercentage}%` }}
                              />
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </TiltCard>
            );
          })}

        </section>

        {/* ==========================================
            4. FAQ SECTION
        ========================================== */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
                DOCUMENT VERIFICATION HELP
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 divide-y divide-slate-200 overflow-hidden">
              {DOCUMENT_FAQS.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="p-5 sm:p-6">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#C8102E] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle size={18} className="text-[#C8102E] flex-shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-[#C8102E]" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 font-medium">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
