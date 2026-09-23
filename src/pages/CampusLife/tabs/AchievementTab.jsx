import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineTrophy,
  HiOutlineAcademicCap,
  HiOutlineFlag,
  HiOutlineStar,
  HiOutlineChartBarSquare,
  HiOutlineBeaker,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import CardList from "./achievement/shared/CardList";
import achievements from "./achievement/data/achievementsData";
import {
  projectsAwarded,
  seminarWorkshops,
  competitions,
  studentAchievements,
  rankingImages,
  rankingHeadline,
  rankingColumns,
  rankings,
  labs,
  researchInnovation,
} from "./achievement/data/achievementSubData";

const innerTabs = [
  { id: "overview", title: "Awards & Achievements", icon: HiOutlineTrophy },
  { id: "seminars", title: "Seminar & Workshop + Projects Awarded", icon: HiOutlineAcademicCap },
  { id: "competitions", title: "Competitions", icon: HiOutlineFlag },
  { id: "student-achievements", title: "Student Achievements", icon: HiOutlineStar },
  { id: "ranking", title: "Ranking", icon: HiOutlineChartBarSquare },
  { id: "lab-setup", title: "Lab Setup", icon: HiOutlineBeaker },
  { id: "research-innovation", title: "Research & Innovation", icon: HiOutlineLightBulb },
];

const overviewCards = achievements.map((a) => ({
  title: a.award,
  detail: a.detail,
  image: a.image,
}));

const AchievementTab = () => {

  const [innerTab, setInnerTab] = useState("overview");

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
          Achievement
        </h3>
      </motion.div>

      {/* All 7 tabs on top */}

      <div className="
        flex flex-wrap gap-2 mb-8
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

      {innerTab === "overview" && <CardList items={overviewCards} />}

      {
        innerTab === "seminars" && (
          <div className="space-y-12">

            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-5">
                Projects Awarded
              </h4>
              <CardList items={projectsAwarded} />
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-5">
                Seminars & Workshops
              </h4>
              <CardList items={seminarWorkshops} />
            </div>

          </div>
        )
      }

      {innerTab === "competitions" && <CardList items={competitions} />}

      {innerTab === "student-achievements" && <CardList items={studentAchievements} />}

      {
        innerTab === "ranking" && (
          <div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {
                rankingImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Sandip University ranking award"
                    loading="lazy"
                    className="w-full h-32 sm:h-40 object-cover rounded-2xl border border-gray-200 dark:border-slate-700"
                  />
                ))
              }
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
              {rankingHeadline}
            </p>

            <ResponsiveTable columns={rankingColumns} rows={rankings} />

          </div>
        )
      }

      {
        innerTab === "lab-setup" && (
          <CardList
            items={labs.map((l) => ({
              title: l.lab,
              detail: `${l.purpose} — Sponsored by ${l.sponsor}.`,
              image: l.image,
            }))}
          />
        )
      }

      {innerTab === "research-innovation" && <CardList items={researchInnovation} />}

    </div>
  );
};

export default AchievementTab;
