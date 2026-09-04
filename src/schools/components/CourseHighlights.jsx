import { motion } from "framer-motion";
import {
  FaClock,
  FaGraduationCap,
  FaFlask,
  FaUsers,
} from "react-icons/fa";

// Same 4 highlights every school shows, but each school now passes its own
// values via the `highlights` prop (duration, degree name, lab count,
// placement support) instead of this component hardcoding SOET's numbers.
const ICONS = {
  clock: <FaClock />,
  graduation: <FaGraduationCap />,
  flask: <FaFlask />,
  users: <FaUsers />,
};

const DEFAULT_HIGHLIGHTS = [
  { icon: "clock", title: "Duration", value: "4 Years" },
  { icon: "graduation", title: "Degree", value: "B.Tech" },
  { icon: "flask", title: "Laboratories", value: "15+ Modern Labs" },
  { icon: "users", title: "Placement Support", value: "100% Assistance" },
];

const CourseHighlights = ({ highlights = DEFAULT_HIGHLIGHTS }) => {
  return (
    <section className="bg-[var(--surface)] py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">
            Program Overview
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-bold text-[var(--ink)] md:text-5xl">
            Course Highlights
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-muted)]">
            Key features of the program — academic structure, practical
            exposure and career support at a glance.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] px-6 py-6 transition-colors duration-300 hover:border-[var(--brand-red-600)] hover:bg-[var(--surface-muted)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-sm text-white">
                {ICONS[item.icon] || ICONS.clock}
              </div>

              <div className="mt-6">
                <p className="font-[var(--font-display)] text-2xl font-bold leading-none text-[var(--ink)] md:text-3xl">
                  {item.value}
                </p>
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
