import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import OverviewSection from "./studentWelfare/OverviewSection";
import VisionMissionSection from "./studentWelfare/VisionMissionSection";
import DswBodyMembersSection from "./studentWelfare/DswBodyMembersSection";
import StudentCouncilFullSection from "./studentWelfare/StudentCouncilFullSection";
import KeyRolesSection from "./studentWelfare/KeyRolesSection";
import { quickLinks } from "./studentWelfare/data/lists";

const innerTabs = [
  { id: "overview", title: "Overview & Vision", icon: HiOutlineHomeModern },
  { id: "dsw-body", title: "DSW Body Members", icon: HiOutlineUserGroup },
  { id: "students-council", title: "Students Council", icon: HiOutlineUsers },
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

      {/* Quick links — deliberately plain underlined links, not pill buttons,
          so they read as a resource list rather than more tabs. */}

      <div className="
        flex flex-wrap
        gap-x-6 gap-y-2
        mb-10
        pb-6
        border-b border-gray-200 dark:border-slate-700
      ">
        {
          quickLinks.map((link) => {

            const Icon = link.external ? HiOutlineDocumentArrowDown : HiOutlineArrowTopRightOnSquare;

            const linkClasses = `
              inline-flex items-center gap-1.5
              text-sm font-semibold
              text-red-600 dark:text-red-400
              underline-offset-4
              decoration-red-300 dark:decoration-red-700
              hover:underline hover:text-red-700 dark:hover:text-red-300
              transition-colors
            `;

            if (link.external) {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {link.title}
                </a>
              );
            }

            return (
              <Link key={link.title} to={link.href} className={linkClasses}>
                <Icon className="w-4 h-4 shrink-0" />
                {link.title}
              </Link>
            );

          })
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

      {
        innerTab === "overview" && (
          <div className="space-y-14">
            <OverviewSection />
            <VisionMissionSection />

            <div className="
              flex items-center gap-3
              bg-red-50 dark:bg-red-900/20
              border border-red-100 dark:border-red-900
              rounded-2xl p-6
            ">
              <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Darshan Ahire, Director Students' Welfare
                </p>
                <a
                  href="mailto:dirsw@sandipuniversity.edu.in"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
                >
                  dirsw@sandipuniversity.edu.in
                </a>
              </div>
            </div>
          </div>
        )
      }

      {innerTab === "dsw-body" && <DswBodyMembersSection />}

      {innerTab === "students-council" && <StudentCouncilFullSection />}

      {innerTab === "key-roles" && <KeyRolesSection />}

    </div>
  );
};

export default StudentWelfareTab;
