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
  const [availableTabs, setAvailableTabs] = useState(tabs);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const visibleTabs = tabs.filter((tab) => document.getElementById(tab.id));
    const tabUpdateFrame = requestAnimationFrame(() => setAvailableTabs(visibleTabs));
    const sections = visibleTabs.map((tab) => document.getElementById(tab.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { root: null, threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      cancelAnimationFrame(tabUpdateFrame);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="sticky top-20 z-40 border-y border-[var(--line)] bg-[var(--surface)]/90 py-1 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center justify-start gap-1 md:justify-center">
            {availableTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToSection(tab.id);
                }}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors duration-300 md:px-5 ${activeTab === tab.id ? "text-[var(--brand-red-600)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[var(--brand-red-600)]"
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
