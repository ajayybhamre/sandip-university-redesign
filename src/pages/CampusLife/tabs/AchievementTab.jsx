import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineFlag,
  HiOutlineStar,
  HiOutlineChartBarSquare,
  HiOutlineGift,
  HiOutlineBeaker,
  HiOutlineLightBulb,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import CardList from "./achievement/shared/CardList";
import achievements, { achievementColumns } from "./achievement/data/achievementsData";
import {
  seminarWorkshops,
  competitions,
  studentAchievements,
  rankingHeadline,
  rankingColumns,
  rankings,
  projectsAwarded,
  labColumns,
  labs,
  researchInnovation,
} from "./achievement/data/achievementSubData";

const innerTabs = [
  { id: "seminars", title: "Seminar & Workshop", icon: HiOutlineAcademicCap },
  { id: "competitions", title: "Competitions", icon: HiOutlineFlag },
  { id: "student-achievements", title: "Student Achievements", icon: HiOutlineStar },
  { id: "ranking", title: "Ranking", icon: HiOutlineChartBarSquare },
  { id: "projects-awarded", title: "Project Awarded", icon: HiOutlineGift },
  { id: "lab-setup", title: "Lab Setup", icon: HiOutlineBeaker },
  { id: "research-innovation", title: "Research & Innovation", icon: HiOutlineLightBulb },
];

const AchievementTab = () => {

  const [innerTab, setInnerTab] = useState("seminars");

  return (
    <div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-red-600 font-semibold uppercase tracking-[3px] text-sm">
          A Legacy of Excellence
        </span>
        <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Awards & Achievements
        </h3>
      </motion.div>

      <ResponsiveTable columns={achievementColumns} rows={achievements} />

      {/* Note on Patents & IPR */}

      <div className="
        flex items-start gap-3 mt-6
        bg-gray-50 dark:bg-slate-900
        border border-gray-200 dark:border-slate-700
        rounded-2xl p-5
      ">
        <HiOutlineInformationCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
          Faculty and institutional Patents & IPR filings are covered under
          the university's Research section rather than here.
        </p>
      </div>

      {/* Inner tabs */}

      <div className="
        flex flex-wrap gap-2 mt-10 mb-8
        border-b border-gray-200 dark:border-slate-700 pb-4
      ">
        {
          innerTabs.map((tab) => {

            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setInnerTab(tab.id)}
                className={`
                  flex items-center gap-2
                  px-5 py-2.5 rounded-full
                  text-sm font-semibold
                  transition-all
                  ${
                    innerTab === tab.id
                    ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-md"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.title}
              </button>
            );

          })
        }
      </div>

      {innerTab === "seminars" && <CardList items={seminarWorkshops} />}

      {innerTab === "competitions" && <CardList items={competitions} />}

      {innerTab === "student-achievements" && <CardList items={studentAchievements} />}

      {
        innerTab === "ranking" && (
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
              {rankingHeadline}
            </p>
            <ResponsiveTable columns={rankingColumns} rows={rankings} />
          </div>
        )
      }

      {innerTab === "projects-awarded" && <CardList items={projectsAwarded} />}

      {
        innerTab === "lab-setup" && (
          <ResponsiveTable columns={labColumns} rows={labs} />
        )
      }

      {innerTab === "research-innovation" && <CardList items={researchInnovation} />}

    </div>
  );
};

export default AchievementTab;
