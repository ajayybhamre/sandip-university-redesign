import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import researchBanner from "../../assets/images/campus-life/campus/campus-1.jpg";

import tabData from "./tabData";
import OverviewTab from "./tabs/OverviewTab";
import GovernanceTab from "./tabs/GovernanceTab";
import FacultyOutputTab from "./tabs/FacultyOutputTab";
import BooksTab from "./tabs/BooksTab";
import FundingTab from "./tabs/FundingTab";
import IprTab from "./tabs/IprTab";
import CentreOfExcellenceTab from "./tabs/CentreOfExcellenceTab";
import CicTab from "./tabs/CicTab";
import AwardsTab from "./tabs/AwardsTab";
import PoliciesTab from "./tabs/PoliciesTab";

export default function Research() {

  const [searchParams] = useSearchParams();

  const requestedTab = searchParams.get("tab");

  const validTabIds = tabData.map((tab) => tab.id);

  const initialTab = validTabIds.includes(requestedTab) ? requestedTab : "overview";

  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <>
      <SEO {...seoData.research} />

      <Header />

      <Breadcrumb
        badge="Knowledge & Innovation"
        title="Research"
        description="Faculty output, funded projects, patents, infrastructure, awards and the Ph.D. programme at Sandip University."
        currentPage="Research"
        image={researchBanner}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1400px] mx-auto px-5">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {
              tabData.map((tab) => {

                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2
                      px-5 py-2.5 rounded-full
                      text-sm font-semibold
                      transition-all
                      ${
                        activeTab === tab.id
                        ? "bg-red-600 text-white shadow-md"
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

            <a
              href="/phd"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-full
                text-sm font-semibold
                bg-gray-900 text-white
                hover:bg-black
                transition-all
              "
            >
              <HiOutlineAcademicCap className="w-4 h-4" />
              PHD
              <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5 opacity-70" />
            </a>
          </motion.div>

          <div className="
            bg-white dark:bg-[#111111]
            border border-red-100 dark:border-red-900
            rounded-3xl shadow-lg
            p-8 lg:p-10
            min-h-[400px]
          ">
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "governance" && <GovernanceTab />}
            {activeTab === "faculty-output" && <FacultyOutputTab />}
            {activeTab === "books" && <BooksTab />}
            {activeTab === "funding" && <FundingTab />}
            {activeTab === "ipr" && <IprTab />}
            {activeTab === "centre-of-excellence" && <CentreOfExcellenceTab />}
            {activeTab === "cic" && <CicTab />}
            {activeTab === "awards" && <AwardsTab />}
            {activeTab === "policies" && <PoliciesTab />}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
