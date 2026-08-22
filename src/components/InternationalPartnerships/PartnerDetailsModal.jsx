import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, MapPin, ShieldCheck, FileText, CheckCircle2, Award } from "lucide-react";

export default function PartnerDetailsModal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col relative my-auto"
        >
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 relative">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{partner.flag}</span>
                <span className="text-xs font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-lg">
                  {partner.country}
                </span>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-orange-500 text-white">
                  {partner.type}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {partner.name}
              </h2>
              <div className="text-xs text-orange-400 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{partner.region}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-orange-600 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-slate-900 text-sm leading-relaxed">
            
            {/* Agreement Summary */}
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Partnership Overview</span>
              </h3>
              <p className="text-slate-600">{partner.description}</p>
            </div>

            {/* MOU Title */}
            {partner.mouTitle && (
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/80">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase mb-1">OFFICIAL AGREEMENT</div>
                <div className="text-sm font-extrabold text-slate-900">{partner.mouTitle}</div>
              </div>
            )}

            {/* Collaboration Areas */}
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Collaboration Scopes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                {partner.collaborations.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{col}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
