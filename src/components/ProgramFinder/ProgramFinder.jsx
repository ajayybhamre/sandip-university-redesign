import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCHOOLS, LEVELS, PROGRAMS } from "./programData";
import SchoolSidebar from "./SchoolSidebar";
import LevelFilter from "./LevelFilter";
import ProgramList from "./ProgramList";
import styles from "./ProgramFinder.module.css";
import { Filter, X, ChevronRight } from "lucide-react";

export default function ProgramFinder({ onSelectProgram }) {
  const [selectedSchool, setSelectedSchool] = useState("cse");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Active School Metadata
  const activeSchoolObj = useMemo(() => {
    return SCHOOLS.find((s) => s.id === selectedSchool) || SCHOOLS[0];
  }, [selectedSchool]);

  // Filtered Programs calculation
  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((prog) => {
      const matchesSchool = prog.schoolId === selectedSchool;
      const matchesLevel = selectedLevel === "all" || prog.level === selectedLevel;
      return matchesSchool && matchesLevel;
    });
  }, [selectedSchool, selectedLevel]);

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    setIsMobileDrawerOpen(false);
  };

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className={`w-full ${styles.container}`}>
      
      {/* Mobile Top Filter Trigger Bar (<768px) */}
      <div className="md:hidden flex items-center justify-between p-3 mb-4 bg-white dark:bg-[#161619] border border-gray-200 dark:border-gray-800 rounded-xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-800 dark:text-gray-200">
          <span className="text-[#C8102E] dark:text-red-400 font-bold">{activeSchoolObj.name}</span>
          {selectedLevel !== "all" && (
            <span className="px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/60 text-[#C8102E] dark:text-red-400 font-bold">
              {selectedLevel}
            </span>
          )}
        </div>

        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="px-3 py-1.5 rounded-lg bg-[#C8102E] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
        >
          <Filter size={14} />
          <span>Filters</span>
        </button>
      </div>

      {/* Main 2-Column Grid Layout */}
      <div className={styles.grid}>
        
        {/* Left Rail Sidebar (Desktop >=768px) */}
        <aside className="hidden md:block w-[180px] flex-shrink-0 space-y-6">
          <SchoolSidebar
            schools={SCHOOLS}
            selectedSchool={selectedSchool}
            onSelectSchool={setSelectedSchool}
          />
          <LevelFilter
            levels={LEVELS}
            selectedLevel={selectedLevel}
            onSelectLevel={setSelectedLevel}
          />
        </aside>

        {/* Right Panel Results */}
        <main className="min-w-0 flex-1">
          <ProgramList
            school={activeSchoolObj}
            programs={filteredPrograms}
            selectedLevel={selectedLevel}
            onSelectProgram={onSelectProgram}
          />
        </main>

      </div>

      {/* Mobile Drawer Overlay (<768px) */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs md:hidden">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-[#18181b] w-[80%] max-w-xs h-full p-5 overflow-y-auto space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                <span className="font-bold text-sm text-gray-900 dark:text-white">Filter Programs</span>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <SchoolSidebar
                schools={SCHOOLS}
                selectedSchool={selectedSchool}
                onSelectSchool={handleSchoolSelect}
              />

              <LevelFilter
                levels={LEVELS}
                selectedLevel={selectedLevel}
                onSelectLevel={handleLevelSelect}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
