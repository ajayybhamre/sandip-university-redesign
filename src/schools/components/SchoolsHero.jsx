import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import schoolsBanner from "../../assets/images/IMG_0862.webp";

export default function SchoolsHero() {
  const scrollToGrid = () => {
    document.getElementById("schools-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[620px] bg-cover bg-center py-28 transition-colors duration-300 md:min-h-[700px] md:py-36"
      style={{ backgroundImage: `url(${schoolsBanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#081b3a]/95 via-[#081b3a]/65 to-[#081b3a]/20" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[var(--brand-red-600)]/20 to-transparent lg:block" />

      <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Sandip University · Schools</p>
          <h1 className="mt-6 max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-8xl">
            Learning designed for the future.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg">Explore the disciplines, people and opportunities that turn ambition into meaningful work.</p>

          <button
            type="button"
            onClick={scrollToGrid}
            className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-red-600)] px-7 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[var(--brand-red-700)]"
          >
            Explore Schools
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="hidden self-end pb-4 lg:col-span-4 lg:block">
          <div className="border-l border-white/35 pl-6 text-white">
            <p className="font-[var(--font-display)] text-6xl font-bold">07</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/65">schools to explore</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-white/50" /> Scroll to explore</div>
    </section>
  );
}
