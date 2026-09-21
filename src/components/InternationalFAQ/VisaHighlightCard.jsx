import { Link } from "react-router-dom";
import { Plane, ShieldCheck, ArrowRight } from "lucide-react";
import "./VisaHighlightCard.css";

export default function VisaHighlightCard() {
  return (
    <div className="my-8 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
          <Plane className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange-400">
            DEDICATED VISA IMMIGRATION ASSISTANCE
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Need help with your Indian Student Visa process?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Sandip University's International Student Cell assists admitted foreign candidates with official Embassy Visa Support Letters and local FRRO registration.
          </p>
        </div>
      </div>

      <Link
        to="/contact"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 self-start md:self-center flex-shrink-0"
      >
        <span>Contact International Cell</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

    </div>
  );
}
