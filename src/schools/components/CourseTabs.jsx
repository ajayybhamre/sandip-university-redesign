import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "career", label: "Career" },
  { id: "faculty", label: "Faculty" },
  { id: "scholarship", label: "Scholarships" },
  { id: "placement", label: "Placements" },
  { id: "faq", label: "FAQs" },
];

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = tabs.map((tab) => document.getElementById(tab.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { root: null, threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="sticky top-20 z-40 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-lg rounded-b-[40px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-center items-center gap-3 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToSection(tab.id);
                }}
                className={`relative whitespace-nowrap rounded-full px-5 md:px-7 py-3 text-sm md:text-base font-semibold transition-all duration-300
                  ${activeTab === tab.id ? "text-white" : "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg"
                  />
                )}

                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;
