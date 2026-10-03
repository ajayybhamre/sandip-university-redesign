import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlinePhone } from "react-icons/hi2";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import examsBanner from "../../assets/images/campus-life/campus/campus-2.png";

import tabData from "./tabData";

export default function Exams() {

  const [searchParams, setSearchParams] = useSearchParams();

  // The URL is the source of truth, so the Exams dropdown links
  // keep working even when the user is already on this page.
  const requestedTab = searchParams.get("tab");
  const activeTab = tabData.some((tab) => tab.id === requestedTab)
    ? requestedTab
    : tabData[0].id;

  const ActiveTab = tabData.find((tab) => tab.id === activeTab).component;

  return (
    <>
      <SEO {...seoData.exams} />

      <Header />

      <Breadcrumb
        badge="Examination"
        title="Exams"
        description="Examination notices, results, timetables and how to apply for examination services at Sandip University."
        currentPage="Exams"
        image={examsBanner}
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
            {tabData.map((tab) => {

              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSearchParams({ tab: tab.id })}
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

            })}
          </motion.div>

          <div className="
            bg-white dark:bg-[#111111]
            border border-red-100 dark:border-red-900
            rounded-3xl shadow-lg
            p-8 lg:p-10
            min-h-[400px]
          ">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ActiveTab />
            </motion.div>

            {/* Helpline strip */}
            <div className="
              mt-14 flex flex-wrap items-center gap-4
              bg-red-50 dark:bg-red-900/20
              border border-red-100 dark:border-red-900
              rounded-2xl p-6
            ">
              <HiOutlinePhone className="text-red-600 w-6 h-6 shrink-0" />
              <a
                href="tel:+919607978068"
                className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors"
              >
                +91 9607978068
              </a>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Examination Helpline
              </span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
