import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Send, PhoneCall, Sparkles } from "lucide-react";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Application</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Your Journey Starts Here
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Join a thriving international community of scholars at Sandip University. Submit your application today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/apply"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Start Application</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-orange-400" />
            <span>Talk to International Admissions</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
