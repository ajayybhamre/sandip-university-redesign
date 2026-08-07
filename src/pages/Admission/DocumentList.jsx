import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import {
  CHECKLIST_SECTIONS,
  CHECKLIST_DOCUMENTS,
} from "./DocumentChecklist/documentChecklistData";
import ChecklistSidebar from "./DocumentChecklist/ChecklistSidebar/ChecklistSidebar";
import ChecklistSummary from "./DocumentChecklist/ChecklistSummary/ChecklistSummary";
import DocumentAccordionRow from "./DocumentChecklist/DocumentAccordionRow/DocumentAccordionRow";
import VisitReminderStrip from "./DocumentChecklist/VisitReminderStrip/VisitReminderStrip";
import ChecklistFAQ from "./DocumentChecklist/ChecklistFAQ/ChecklistFAQ";
import DocumentModal from "./DocumentChecklist/DocumentModal/DocumentModal";
import { ChevronDown, Eye } from "lucide-react";

export default function DocumentList() {
  const [activeSection, setActiveSection] = useState("academic");
  const [modalDoc, setModalDoc] = useState(null);

  // Per-section toggle state for conditional documents
  const [showConditional, setShowConditional] = useState({
    academic: false,
    identity: false,
    category: false,
    additional: false,
  });

  const toggleConditionalSection = (sectionId) => {
    setShowConditional((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Scroll-Spy Implementation using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace("section-", "");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    CHECKLIST_SECTIONS.forEach((sec) => {
      const el = document.getElementById(`section-${sec.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Manual section navigation click handler
  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Single PDF download action for the page
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0c0c0d] text-gray-900 dark:text-white font-sans selection:bg-[#C8102E] selection:text-white transition-colors duration-300">
      <SEO
        title="Required Documents for Admission 2026-27 | Sandip University"
        description="Official list of academic marksheets, identity proof, and category certificates required for Sandip University admission."
      />

      <Header />

      {/* Main Two-Column App Shell Container */}
      <main className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* 1. Left Sticky Sidebar (~200px on Desktop, Chips on Mobile) */}
          <ChecklistSidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            onDownloadPdf={handleDownloadPdf}
          />

          {/* 2. Right Scrollable Content Area */}
          <div className="flex-1 min-w-0 space-y-8 w-full">
            
            {/* Header Checklist Summary (Live Computed Stats) */}
            <ChecklistSummary />

            {/* Visit Reminder Horizontal Strip */}
            <VisitReminderStrip />

            {/* Document List Sections */}
            <div className="space-y-10">
              {CHECKLIST_SECTIONS.filter((sec) => sec.id !== "faq").map((sec) => {
                const sectionDocs = CHECKLIST_DOCUMENTS.filter(
                  (doc) => doc.section === sec.id
                );

                const mandatoryDocs = sectionDocs.filter(
                  (doc) => doc.status === "mandatory"
                );
                const conditionalDocs = sectionDocs.filter(
                  (doc) => doc.status === "conditional"
                );

                const isConditionalVisible = !!showConditional[sec.id];

                return (
                  <section
                    key={sec.id}
                    id={`section-${sec.id}`}
                    className="scroll-mt-28 space-y-3"
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-zinc-800">
                      <h2 className="text-lg font-bold text-[#102A43] dark:text-white tracking-tight">
                        {sec.label} documents
                      </h2>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {mandatoryDocs.length} mandatory
                        {conditionalDocs.length > 0 && ` · ${conditionalDocs.length} conditional`}
                      </span>
                    </div>

                    {/* Mandatory Document Rows */}
                    <div className="space-y-2">
                      {mandatoryDocs.map((doc) => (
                        <DocumentAccordionRow
                          key={doc.id}
                          doc={doc}
                          onOpenModal={setModalDoc}
                        />
                      ))}
                    </div>

                    {/* Conditional Documents Accordion Toggle */}
                    {conditionalDocs.length > 0 && (
                      <div className="pt-1">
                        <button
                          onClick={() => toggleConditionalSection(sec.id)}
                          className="py-2 px-3 rounded-lg bg-gray-100 dark:bg-zinc-800/80 hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <Eye size={14} className="text-amber-600 dark:text-amber-400" />
                          <span>
                            {isConditionalVisible
                              ? `Hide ${conditionalDocs.length} conditional documents`
                              : `Show ${conditionalDocs.length} conditional documents`}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              isConditionalVisible ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Collapsible Conditional Document Rows */}
                        {isConditionalVisible && (
                          <div className="space-y-2 mt-2 pt-2 border-t border-dashed border-gray-200 dark:border-zinc-800">
                            {conditionalDocs.map((doc) => (
                              <DocumentAccordionRow
                                key={doc.id}
                                doc={doc}
                                onOpenModal={setModalDoc}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                );
              })}

              {/* FAQ Section */}
              <ChecklistFAQ />
            </div>

          </div>

        </div>

      </main>

      {/* Detailed Modal for Multi-Format Documents */}
      <DocumentModal doc={modalDoc} onClose={() => setModalDoc(null)} />

      <Footer />
    </div>
  );
}
