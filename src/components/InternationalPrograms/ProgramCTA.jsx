import { Link } from "react-router-dom";
import { MessageSquare, Send } from "lucide-react";
import "./ProgramCTA.css";

export default function ProgramCTA() {
  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
          Find the Right Program for You
        </h2>

        <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Not sure which program is right for you? Our international admissions team can help you choose the right academic pathway.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Talk to Admissions</span>
          </Link>

          <Link
            to="/apply"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Start Application</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
