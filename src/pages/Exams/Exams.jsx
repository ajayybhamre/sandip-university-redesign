import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

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

  const current = tabData.find((tab) => tab.id === activeTab);

  return (
    <>
      <SEO {...seoData.exams} />

      <Header />

      <Breadcrumb
        badge="Examination"
        title="Exams"
        description="Examination notices, results, timetables, application process and Controller of Examinations co-ordinators at Sandip University."
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
            {/* TODO: replace this placeholder with real content for each tab */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {current.title}
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Content for this section will be published here soon.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
