import { Link } from "react-router-dom";
import { Send, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect With Support</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Your Journey Starts With a Conversation
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Whether you're choosing a program, preparing your application or planning your arrival, we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#enquiry-form"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </a>

          <Link
            to="/international-admission/programs"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>

          <Link
            to="/international-admission/how-to-apply"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-orange-600" />
            <span>How to Apply</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
