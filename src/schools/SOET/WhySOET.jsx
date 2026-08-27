import { motion } from "framer-motion";

const features = [
  {
    tag: "Industry Tie-up",
    title: "Live Industrial Corridor",
    description:
      "Placeholder text — replace with real details on nearby industry partners, plant visits, or guest faculty from the field.",
  },
  {
    tag: "Curriculum",
    title: "NEP 2020 + Industry-Aligned",
    description:
      "Placeholder text — replace with real details on curriculum structure, credit flexibility, or internship integration.",
  },
  {
    tag: "Global",
    title: "Global Pathways",
    description:
      "Placeholder text — replace with real details on exchange programmes, partner universities, or study-abroad routes.",
  },
  
];

export default function WhySOET() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] py-24 transition-colors duration-300">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[var(--brand-red-600)]/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="relative text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-100)]">
          Why SOET
        </span>

        <h2 className="relative mt-4 max-w-3xl font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-white md:text-6xl">
          Engineering with an unfair advantage.
        </h2>

        <div className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[var(--brand-navy)] px-7 py-8 transition-colors duration-300 hover:bg-white/10 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-red-100)]">
                {feature.tag}
              </span><span className="font-[var(--font-display)] text-3xl font-bold text-white/30">0{index + 1}</span></div>
              <h3 className="mt-8 max-w-md font-[var(--font-display)] text-2xl font-bold leading-snug text-white md:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
