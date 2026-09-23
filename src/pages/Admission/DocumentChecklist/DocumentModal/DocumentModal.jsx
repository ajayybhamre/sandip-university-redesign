import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, FileText, AlertCircle } from "lucide-react";

export default function DocumentModal({ doc, onClose }) {
  if (!doc || !doc.modalDetails) return null;

  const details = doc.modalDetails;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-lg rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl p-6 space-y-5 relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pr-6">
            <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 flex items-center justify-center flex-shrink-0">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40">
                Detailed document requirements
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">
                {details.title || doc.title}
              </h3>
            </div>
          </div>

          {/* Accepted Formats */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-[11px]">
              Accepted certificate formats
            </h4>
            <ul className="space-y-1.5">
              {details.acceptedFormats?.map((fmt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{fmt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          {details.notes && (
            <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-gray-200/80 dark:border-zinc-700/60 text-xs text-gray-600 dark:text-gray-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                <AlertCircle size={14} className="text-[#C8102E]" />
                <span>Important verification notes:</span>
              </div>
              <ul className="space-y-1 pl-5 list-disc text-gray-500 dark:text-gray-400">
                {details.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg bg-[#C8102E] text-white font-semibold text-xs cursor-pointer"
            >
              Close instructions
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
