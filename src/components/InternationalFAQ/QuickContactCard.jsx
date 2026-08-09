import { Link } from "react-router-dom";
import { MessageSquare, PhoneCall } from "lucide-react";
import "./QuickContactCard.css";

export default function QuickContactCard() {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-3">
      <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
        <MessageSquare className="w-5 h-5" />
      </div>

      <div>
        <h3 className="font-bold text-slate-900 text-sm">Still Have Questions?</h3>
        <p className="text-xs text-slate-500 leading-relaxed mt-1">
          Can't find what you're looking for? Our international support team can help.
        </p>
      </div>

      <Link
        to="/contact"
        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
      >
        <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
        <span>Contact Admissions</span>
      </Link>
    </div>
  );
}
