import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import programsData from "../data/programsData";

const TABS = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
];

// Auto-discovers every image in assets/images/programs/law/ at build time.
// TODO: add photos named exactly after each program's `slug` (see ./data/programsData.js),
// e.g. assets/images/programs/law/{slug}.webp
// Falls back to assets/images/programs/default.webp when a program has no photo yet.
const imageModules = import.meta.glob(
  "../../../assets/images/programs/law/*.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const defaultImageModules = import.meta.glob(
  "../../../assets/images/programs/default.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const programImages = {};
for (const path in imageModules) {
  const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
  programImages[filename] = imageModules[path];
}
const defaultProgramImage = Object.values(defaultImageModules)[0] || null;

function getProgramImage(slug) {
  return programImages[slug] || defaultProgramImage;
}

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
            const bgImage = getProgramImage(program.slug);
            return (
              <Link
                key={program.id}
                to={`/schools/law/${program.slug}`}
                className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-raised)] px-6 py-5 transition-colors duration-300 hover:border-[var(--brand-red-600)]"
              >
                {/* Background photo — fades in on hover */}
                {bgImage && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                )}

                {/* Navy tint overlay — fades in on top of the photo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#0F253C] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-70"
                />

                {/* Content sits above both layers */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-red-50)] text-[var(--brand-red-600)] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white dark:bg-[var(--brand-red-900)]/20">
                  <GraduationCap size={20} />
                </div>
                <h3 className="relative z-10 font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--ink)] transition-colors duration-300 group-hover:text-white">
                  {program.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
