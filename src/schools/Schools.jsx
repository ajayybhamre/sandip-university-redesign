import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import SEO from "../components/SEO/SEO";
import seoData from "../components/SEO/seoData";
import SchoolsCTA from "./components/SchoolsCTA";
import SchoolCard from "./components/SchoolCard";
import SchoolsHero from "./components/SchoolsHero";
import schoolsData from "./data/schoolsData";

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSchools = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return schoolsData;

    return schoolsData.filter((school) =>
      `${school.name} ${school.code} ${school.tagline}`.toLowerCase().includes(query),
    );
  }, [searchTerm]);

  return (
    <>
      <SEO {...seoData.schools} />
      <Header />
      <SchoolsHero />

      <main id="schools-grid" className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-red-600">Seven ways to grow</span>
              <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">Choose your school</h2>
              <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">Find the academic community that matches your interests, strengths, and ambitions.</p>
            </div>
            <div className="relative w-full md:max-w-xs">
              <Search size={19} className="absolute top-1/2 left-4 -translate-y-1/2 text-red-600" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search schools"
                aria-label="Search schools"
                className="w-full rounded-xl border border-red-100 bg-white py-3.5 pr-11 pl-11 text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-red-600 dark:border-red-900 dark:bg-[#111111] dark:text-white"
              />
              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search" className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:text-red-600">
                  <X size={17} />
                </button>
              )}
            </div>
          </div>

          {filteredSchools.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map((school, index) => (
                <SchoolCard key={school.id} school={school} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-red-100 bg-white px-6 py-14 text-center dark:border-red-900 dark:bg-[#111111]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">No schools found</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Try a different school name or code.</p>
            </div>
          )}
        </div>
      </main>

      <SchoolsCTA />
      <Footer />
    </>
  );
}
