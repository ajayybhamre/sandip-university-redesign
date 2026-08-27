import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SchoolCard({ school, index }) {
  const Icon = school.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.16) }}
      viewport={{ once: true }}
      className={index === 0 ? "md:col-span-2 lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"}
    >
      <Link
        to={`/schools/${school.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] transition-colors duration-300 hover:border-[var(--brand-red-600)]"
      >
        {/* Image */}
        <div className={`relative w-full overflow-hidden bg-[var(--surface-muted)] ${index === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <img
            src={school.image}
            alt={school.name}
            loading="lazy"
            decoding="async"
            width={640}
            height={400}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.18em] text-white">
            {school.code}
          </span>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-red-600)]">
              <Icon size={20} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">{school.level}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-full flex-col px-6 py-7 md:px-7">
          <h3 className="font-[var(--font-display)] text-2xl font-bold leading-tight text-[var(--ink)] transition-colors group-hover:text-[var(--brand-red-600)] md:text-3xl">
            {school.name}
          </h3>
          <p className="mt-4 max-w-xl leading-7 text-[var(--ink-muted)]">{school.tagline}</p>
          <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--line)] pt-5 text-sm">
            <span className="text-[var(--ink-muted)]">{school.programsCount} programs</span>
            <span className="flex items-center gap-2 font-bold text-[var(--brand-red-600)]">
              View school <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
