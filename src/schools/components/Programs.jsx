import { useState } from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = ({ programsData = { undergraduate: [], postgraduate: [] }, schoolName = "School", schoolSlug = "school" }) => {
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <section className="bg-[var(--surface)] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">{schoolName}</p>

          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-6xl">Programs Offered</h2>

          <p className="mt-5 max-w-2xl leading-7 text-[var(--ink-muted)]">Choose from our industry-oriented undergraduate and postgraduate programs designed to prepare students for successful careers.</p>
        </div>

        <div className="mb-10 flex w-fit overflow-x-auto border-b border-[var(--line)]">
            <button type="button" onClick={() => setActiveTab("undergraduate")} className={`whitespace-nowrap border-b-2 px-1 py-4 pr-8 text-sm font-bold transition-colors ${activeTab === "undergraduate" ? "border-[var(--brand-red-600)] text-[var(--brand-red-600)]" : "border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}>Undergraduate</button>

            <button type="button" onClick={() => setActiveTab("postgraduate")} className={`whitespace-nowrap border-b-2 px-8 py-4 text-sm font-bold transition-colors ${activeTab === "postgraduate" ? "border-[var(--brand-red-600)] text-[var(--brand-red-600)]" : "border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}>Postgraduate</button>
        </div>

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {programsData[activeTab]?.map((course, index) => (
            <Link key={course.id} to={course.slug ? `/schools/${schoolSlug}/${course.slug}` : "#"} className="group grid gap-4 py-6 transition-colors hover:bg-[var(--surface-muted)] md:grid-cols-[4rem_1fr_auto] md:items-center md:px-4">
              <span className="text-sm font-bold text-[var(--brand-red-600)]">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-red-50)] text-[var(--brand-red-600)] transition-colors group-hover:bg-[var(--brand-red-600)] group-hover:text-white dark:bg-[var(--brand-red-900)]/20">
                  <GraduationCap size={19} />
                </div>

                <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--brand-red-600)]">{course.title}</h3>
              </div>
              <span className="flex items-center gap-2 text-sm font-bold text-[var(--brand-red-600)] md:justify-self-end">Open programme <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
