import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineHomeModern,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineFlag,
  HiOutlineIdentification,
  HiOutlineClipboardDocumentList,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import OverviewSection from "./studentWelfare/OverviewSection";
import VisionMissionSection from "./studentWelfare/VisionMissionSection";
import DswBodyMembersSection from "./studentWelfare/DswBodyMembersSection";
import StudentsCouncilSection from "./studentWelfare/StudentsCouncilSection";
import ObjectivesSection from "./studentWelfare/ObjectivesSection";
import CouncilMembersSection from "./studentWelfare/CouncilMembersSection";
import KeyRolesSection from "./studentWelfare/KeyRolesSection";
import { quickLinks } from "./studentWelfare/data/lists";

const innerTabs = [
  { id: "overview", title: "Overview", icon: HiOutlineHomeModern },
  { id: "vision-mission", title: "Vision & Mission", icon: HiOutlineHeart },
  { id: "dsw-body", title: "DSW Body Members", icon: HiOutlineUserGroup },
  { id: "students-council", title: "Students Council", icon: HiOutlineUsers },
  { id: "objectives", title: "Objectives", icon: HiOutlineFlag },
  { id: "council-members", title: "Student Council Members", icon: HiOutlineIdentification },
  { id: "key-roles", title: "Key Roles & Responsibilities", icon: HiOutlineClipboardDocumentList },
];

const StudentWelfareTab = () => {

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
          Directorate of Student Welfare
        </span>
        <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Student Welfare
        </h3>
      </motion.div>

      {/* Quick links */}

      <div className="flex flex-wrap gap-2 mb-8">
        {
          quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="
                flex items-center gap-1.5
                px-4 py-2 rounded-full
                text-xs sm:text-sm font-semibold
                bg-gray-100 dark:bg-slate-800
                text-gray-600 dark:text-gray-300
                hover:bg-red-50 dark:hover:bg-red-900/20
                hover:text-red-600
                transition-all
              "
            >
              {link.title}
              <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
            </a>
          ))
        }
      </div>

      {/* Inner tabs */}

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

      {innerTab === "overview" && <OverviewSection />}
      {innerTab === "vision-mission" && <VisionMissionSection />}
      {innerTab === "dsw-body" && <DswBodyMembersSection />}
      {innerTab === "students-council" && <StudentsCouncilSection />}
      {innerTab === "objectives" && <ObjectivesSection />}
      {innerTab === "council-members" && <CouncilMembersSection />}
      {innerTab === "key-roles" && <KeyRolesSection />}

    </div>
  );
};

export default StudentWelfareTab;
