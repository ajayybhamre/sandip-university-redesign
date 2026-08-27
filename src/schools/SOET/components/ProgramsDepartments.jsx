import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import programsData from "../data/programsData";

const TABS = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
];

export default function ProgramsDepartments() {
  const [activeTab, setActiveTab] = useState("undergraduate");
  const programs = programsData[activeTab] || [];

  return (
    <section className="py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">
            Programmes & Departments
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-6xl">
            Pick your programme.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--ink-muted)]">
            Explore industry-oriented undergraduate and postgraduate programmes designed to prepare students for successful careers.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 inline-flex border-b border-[var(--line)]">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-1 py-4 pr-8 text-sm font-bold transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-[var(--brand-red-600)] text-[var(--brand-red-600)]"
                  : "border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => {
            return (
              <Link
                key={program.id}
                to={`/schools/soet/${program.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface-raised)] px-6 py-5 transition-colors duration-300 hover:border-[var(--brand-red-600)] hover:bg-[var(--surface-muted)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-red-50)] text-[var(--brand-red-600)] transition-colors group-hover:bg-[var(--brand-red-600)] group-hover:text-white dark:bg-[var(--brand-red-900)]/20">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--brand-red-600)]">{program.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
