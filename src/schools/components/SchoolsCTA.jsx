import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SchoolsCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] py-24">
      <div className="absolute -right-24 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute -right-8 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[var(--brand-red-600)]/40" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--brand-red-600)]/15 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8"
      >
        <div>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-100)]">Your next chapter starts here</span>
        <h2 className="mt-4 max-w-2xl font-[var(--font-display)] text-4xl font-bold leading-tight text-white md:text-6xl">Still deciding where you belong?</h2>
        <p className="mt-5 max-w-2xl leading-8 text-white/70">Talk to our admissions team and get clear guidance on programs, eligibility, and the best path for your goals.</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Link to="/contact" className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-red-600)] px-7 py-4 font-semibold text-white transition-colors hover:bg-[var(--brand-red-700)]">
            <MessageCircle size={19} /> Talk to admissions <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-3 rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
            Explore admissions <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
