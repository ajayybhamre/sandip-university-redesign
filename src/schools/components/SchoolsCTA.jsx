import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SchoolsCTA() {
  return (
    <section className="relative overflow-hidden rounded-t-[50px] bg-white py-20 dark:bg-slate-950">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-size-[22px_22px] opacity-5" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-red-600">Your next chapter starts here</span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">Still deciding where you belong?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600 dark:text-gray-300">Talk to our admissions team and get clear guidance on programs, eligibility, and the best path for your goals.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-red-500/30">
            <MessageCircle size={19} /> Talk to admissions <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-3 rounded-xl border border-red-100 bg-white px-7 py-4 font-semibold text-red-600 transition-all hover:border-red-600 dark:border-red-900 dark:bg-[#111111]">
            Explore admissions <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
