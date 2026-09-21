import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import "./InternationalCTA.css";

export default function InternationalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Soft Animated Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="p-10 sm:p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open 2026-27</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Ready to Begin Your Journey?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Take the first step towards an international education experience at Sandip University. Our international admissions cell is here to support you at every stage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply Now</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#schools-section"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all duration-300 text-center"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
