// src/pages/COE/HowToApply.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import seoData from "../../components/SEO/seoData";
import HowToApplyCard from "./components/HowToApplyCard";
import { howToApplyCategories, erpLoginUrl } from "./data/coeData";

const HowToApply = () => {
  const [activeCategory, setActiveCategory] = useState(howToApplyCategories[0].id);
  const active = howToApplyCategories.find((c) => c.id === activeCategory);

  return (
    <>
      <SEO data={seoData.coe} />
      <Header />

      <main className="bg-white dark:bg-black">
        <Breadcrumb title="How to Apply" />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Student Examination Activities
            </span>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              How to Apply
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
              Procedures and application forms for examination-related requests, grouped by
              category. Items marked "Apply Online" are handled through the{" "}
              <a
                href={erpLoginUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-red-600 hover:underline"
              >
                Student ERP Portal
              </a>
              .
            </p>

            <div className="mt-8 flex w-full flex-row border-b border-gray-200 dark:border-gray-800">
              {howToApplyCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex-1 pb-3 text-xs sm:text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && (
                    <motion.span
                      layoutId="howToApplyTabUnderline"
                      className="absolute left-0 right-0 -bottom-px h-0.5 bg-gray-900 dark:bg-white"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {active.items.map((item) => (
                  <HowToApplyCard key={item.id} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowToApply;
