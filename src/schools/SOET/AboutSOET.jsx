import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  UserCheck,
  FlaskConical,
  TrendingUp,
  BookOpen,
  Briefcase,
  Microscope,
} from "lucide-react";

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Students" },
  { icon: UserCheck, value: 80, suffix: "+", label: "Faculty" },
  { icon: FlaskConical, value: 25, suffix: "+", label: "Labs" },
  { icon: TrendingUp, value: 90, suffix: "%", label: "Placement" },
];

const identityTabs = [
  {
    id: "curriculum",
    label: "Curriculum",
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    points: [
      "Updated regularly with input from industry advisory boards",
      "Live projects and internships built into the programme structure",
      "Electives covering emerging areas alongside core engineering fundamentals",
    ],
  },
  {
    id: "labs",
    label: "Labs",
    icon: FlaskConical,
    title: "State-of-the-Art Labs",
    points: [
      "Dedicated labs for every department, not shared generic setups",
      "Equipment aligned with current industry tools and standards",
      "Open lab hours for student projects outside class time",
    ],
  },
  {
    id: "placement",
    label: "Placement",
    icon: Briefcase,
    title: "Placement Support",
    points: [
      "Dedicated placement cell working with recruiters year-round",
      "Resume, aptitude and interview preparation built into later semesters",
      "Strong alumni network across core and IT sectors",
    ],
  },
  {
    id: "research",
    label: "Research",
    icon: Microscope,
    title: "Research Focus",
    points: [
      "Faculty-led research projects open to undergraduate students",
      "Funded research opportunities in select departments",
      "Publication and conference support for student research work",
    ],
  },
];

// Respects prefers-reduced-motion — skips the count animation and shows the
// final value immediately if the user has that OS setting enabled.
function useCountUp(target, shouldStart) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      requestAnimationFrame(() => setValue(target));
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target]);

  return value;
}

function StatCard({ icon: Icon, value, suffix, label, inView }) {
  const count = useCountUp(value, inView);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] px-6 py-7 text-center transition-colors hover:border-[var(--brand-red-600)]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-white">
        <Icon size={22} />
      </div>
      <p className="mt-4 font-[var(--font-display)] text-3xl font-bold text-[var(--ink)]">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">{label}</p>
    </div>
  );
}

export default function About() {
  const [statsInView, setStatsInView] = useState(false);
  const [activeTab, setActiveTab] = useState(identityTabs[0].id);

  const active = identityTabs.find((tab) => tab.id === activeTab);
  const ActiveIcon = active.icon;

  return (
    <section className="bg-[var(--surface)] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">
            About the School
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-[var(--ink)] md:text-6xl">
            Engineering built for the real world.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ink-muted)]">
            The School of Engineering & Technology brings together focused
            departments, industry-aligned programmes and hands-on labs so
            students graduate ready for the problems they'll actually face —
            not just the ones in a textbook.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          onViewportEnter={() => setStatsInView(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={statsInView} />
          ))}
        </motion.div>

        {/* Tabbed identity switcher */}
        <div className="mt-20">
          <div className="flex w-full overflow-x-auto border-b border-[var(--line)]">
            {identityTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                    className={`relative flex min-w-fit flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-bold transition-colors duration-200 md:px-5 ${
                    isActive
                      ? "text-[var(--brand-red-600)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <TabIcon size={16} />
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId="about-tab-underline"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[var(--brand-red-600)]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-7 md:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-red-50)] text-[var(--brand-red-600)] dark:bg-[var(--brand-red-900)]/20">
                    <ActiveIcon size={22} />
                  </span>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--ink)]">
                    {active.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-3">
                  {active.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--ink-muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red-600)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
