import { motion } from "framer-motion";
import { Globe, MapPin, Eye, FileText, ArrowRight } from "lucide-react";

export default function PartnerCard({ partner, onViewDetails }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 p-6 flex flex-col justify-between"
    >
      <div>
        {/* Flag + Country Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{partner.flag}</span>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
              {partner.country}
            </span>
          </div>

          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
            {partner.type}
          </span>
        </div>

        {/* Institution Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
          {partner.name}
        </h3>

        {/* Region */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 font-medium">
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          <span>{partner.region}</span>
        </div>

        {/* Short description */}
        <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-3">
          {partner.description}
        </p>

        {/* Collaboration Tags */}
        <div className="flex flex-wrap gap-1 mb-6">
          {partner.collaborations.map((col, cIdx) => (
            <span key={cIdx} className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
              {col}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onViewDetails(partner)}
        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <Eye className="w-3.5 h-3.5 text-orange-400" />
        <span>View Partnership</span>
      </button>
    </motion.div>
  );
}
