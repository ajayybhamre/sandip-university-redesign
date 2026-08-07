import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramRow from "./ProgramRow";
import { BookOpen } from "lucide-react";

export default function ProgramList({ school, programs, selectedLevel, onSelectProgram }) {
  return (
    <div className="space-y-4">
      {/* Header Row: School Name + Program Count */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            {school ? school.fullName : "Programs"}
          </h2>
          {selectedLevel !== "all" && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Filtered by Level: <strong className="text-[#C8102E] dark:text-red-400">{selectedLevel}</strong>
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {programs.length} {programs.length === 1 ? "program" : "programs"}
        </span>
      </div>

      {/* Divided Program Rows with Framer Motion Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${school?.id}-${selectedLevel}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="divide-y divide-gray-100 dark:divide-gray-800/60"
        >
          {programs.length === 0 ? (
            <div className="py-12 text-center text-gray-500 dark:text-gray-400">
              <BookOpen size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-xs">No programs found for the selected level.</p>
            </div>
          ) : (
            programs.map((program) => (
              <ProgramRow
                key={program.id}
                program={program}
                onSelectProgram={onSelectProgram}
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
