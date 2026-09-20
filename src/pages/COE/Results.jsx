// src/pages/COE/Results.jsx

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import seoData from "../../components/SEO/seoData";
import COEListItemCard from "./components/COEListItemCard";
import COEEmptyState from "./components/COEEmptyState";
import { useCoeItems } from "./hooks/useCoeItems";
import { resultsData } from "./data/coeData";

const Results = () => {
  const { items, isLoading, error } = useCoeItems(resultsData);

  return (
    <>
      <SEO data={seoData.coe} />
      <Header />

      <main className="bg-white dark:bg-black">
        <Breadcrumb title="Results" />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Controller of Examinations
            </span>
            <h1 className="mt-2 mb-8 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Results
            </h1>
            <p className="mb-8 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
              Results published here are for immediate reference. For official grade
              cards and transcripts, use the{" "}
              <span className="font-medium">How to Apply</span> section.
            </p>

            {isLoading && (
              <p className="text-sm text-gray-500 dark:text-gray-400">Loading results…</p>
            )}
            {error && <p className="text-sm text-red-600">Couldn't load results right now.</p>}
            {!isLoading && !error && items.length === 0 && <COEEmptyState />}

            {!isLoading && !error && items.length > 0 && (
              <div className="space-y-3">
                {items.map((item) => (
                  <COEListItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Results;
