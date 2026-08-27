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

      <main id="schools-grid" className="bg-[var(--surface)] py-24 transition-colors duration-300 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">Seven ways to grow</span>
              <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-[var(--ink)] md:text-6xl">Choose the place your next chapter begins.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--ink-muted)]">Find the academic community that matches your interests, strengths, and ambitions.</p>
            </div>
            <div className="w-full lg:w-72">
              <label htmlFor="school-search" className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)]">Find a school</label>
              <div className="relative">
              <Search size={18} className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-[var(--brand-red-600)]" />
              <input
                id="school-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name or code"
                aria-label="Search schools"
                className="w-full border-0 border-b border-[var(--line)] bg-transparent py-3 pr-9 pl-8 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-muted)] focus:border-[var(--brand-red-600)]"
              />
              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search" className="absolute top-1/2 right-0 -translate-y-1/2 p-1 text-[var(--ink-muted)] transition-colors hover:text-[var(--brand-red-600)]">
                  <X size={17} />
                </button>
              )}
              </div>
            </div>
          </div>

          {filteredSchools.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
              {filteredSchools.map((school, index) => (
                <SchoolCard key={school.id} school={school} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] px-6 py-14 text-center">
              <h3 className="text-xl font-bold text-[var(--ink)]">No schools found</h3>
              <p className="mt-2 text-[var(--ink-muted)]">Try a different school name or code.</p>
            </div>
          )}
        </div>
      </main>

      <SchoolsCTA />
      <Footer />
    </>
  );
}
