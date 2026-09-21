import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, HelpCircle, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import VisaHighlightCard from "./VisaHighlightCard";
import QuickContactCard from "./QuickContactCard";
import { INTL_FAQ_CATEGORIES } from "../../pages/InternationalAdmission/intlFaqData";
import "./FAQAccordion.css";

export default function FAQAccordion({
  faqs,
  selectedCategory,
  setSelectedCategory,
  activeOpenId,
  setActiveOpenId,
  onClearFilters,
}) {
  const toggleItem = (id) => {
    setActiveOpenId(activeOpenId === id ? null : id);
  };

  return (
    <section id="faq-accordion-section" className="py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Results Counter Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" />
            <h2 className="text-2xl font-extrabold text-slate-900">Find Your Answer</h2>
          </div>

          <div className="text-xs font-sans font-bold text-slate-500 bg-slate-100 px-3.5 py-1 rounded-full">
            {faqs.length} {faqs.length === 1 ? "Question Found" : "Questions Found"}
          </div>
        </div>

        {/* Two Column Layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Sticky Category Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <div className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
              CATEGORIES
            </div>
            {INTL_FAQ_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all duration-200 text-xs font-bold flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200/80 hover:bg-orange-50/50 hover:border-orange-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-orange-400" />}
                </button>
              );
            })}

            {/* Quick Contact Widget in Sidebar */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              <QuickContactCard />
            </div>
          </div>

          {/* RIGHT: Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Visa Highlight Notice */}
            <VisaHighlightCard />

            {faqs.length > 0 ? (
              faqs.map((item, idx) => {
                const isOpen = activeOpenId === item.id;
                const numStr = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={item.id}
                    id={`faq-${item.id}`}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-slate-900 shadow-md"
                        : "bg-slate-50/80 border-slate-200/90 hover:border-orange-300 hover:bg-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className={`font-sans text-xs font-black mt-1 ${isOpen ? "text-orange-600" : "text-slate-400"}`}>
                          {numStr}
                        </span>
                        <div>
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60 mb-1 inline-block">
                            {item.categoryLabel}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 leading-snug">
                            {item.question}
                          </h3>
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen ? "bg-slate-900 text-white" : "bg-slate-200/60 text-slate-600"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50"
                        >
                          <p className="mb-4">{item.answer}</p>

                          {item.ctaLink && (
                            <Link
                              to={item.ctaLink}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shadow-xs"
                            >
                              <span>{item.ctaText || "Learn More"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center text-slate-500 bg-slate-50 rounded-3xl border border-slate-200">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">No Answers Found</h3>
                <p className="text-sm text-slate-600 mb-4">Try searching with another keyword or resetting categories.</p>
                <button
                  onClick={onClearFilters}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Clear Search Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
