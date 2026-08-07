import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { CHECKLIST_FAQS } from "../documentChecklistData";

export default function ChecklistFAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState({
    "faq-1": true,
  });

  const toggleFaq = (faqId) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  return (
    <div id="section-faq" className="space-y-4 pt-4 scroll-mt-28">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-zinc-800">
        <HelpCircle size={18} className="text-[#C8102E] dark:text-red-400" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Frequently asked questions
        </h2>
      </div>

      <div className="space-y-2">
        {CHECKLIST_FAQS.map((faq) => {
          const isOpen = !!expandedFaqs[faq.id];

          return (
            <div
              key={faq.id}
              className="rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-gray-700 dark:text-gray-200" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/40"
                  >
                    <div className="p-3.5 text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
