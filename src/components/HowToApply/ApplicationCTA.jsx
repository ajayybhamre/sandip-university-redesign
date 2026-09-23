import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Send, MessageSquare } from "lucide-react";
import "./ApplicationCTA.css";

export default function ApplicationCTA() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Ready to Start Your Application?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Begin your online international application today or reach out to our team for personalized guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/apply"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Apply Now</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Contact International Admissions</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
