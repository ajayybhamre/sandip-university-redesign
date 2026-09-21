import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";

export default function ProgrammeNotFound() {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">Programme</p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--ink)]">Programme not found.</h1>
        <Link
          to="/schools"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[var(--brand-red-600)] px-6 py-3 font-semibold text-white"
        >
          Back to schools <ArrowRight size={17} />
        </Link>
      </main>
      <Footer />
    </>
  );
}
