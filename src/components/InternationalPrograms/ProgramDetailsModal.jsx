import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ShieldCheck, CheckCircle2, Briefcase, GraduationCap, ArrowRight, Award, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramDetailsModal({ program, onClose }) {
  if (!program) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col relative my-auto"
        >
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 relative">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-orange-500 text-white">
                  {program.level === "UG" ? "Undergraduate" : program.level === "PG" ? "Postgraduate" : "Foundation"}
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded-lg">
                  {program.duration}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {program.title}
              </h2>
              <div className="text-xs text-orange-400 font-medium">
                {program.school}
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
            
            {/* Overview */}
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Program Overview</span>
              </h3>
              <p className="text-slate-600">{program.overview}</p>
            </div>

            {/* Specializations */}
            {program.specializations && program.specializations.length > 0 && (
              <div>
                <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">Available Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {program.specializations.map((spec, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200/80 text-xs font-bold">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Eligibility Requirements */}
            {program.eligibilityRequirements && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Eligibility & Criteria</span>
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {program.eligibilityRequirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>{req.title}:</strong> {req.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career & Outcomes */}
            {program.careerDetails && (
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-orange-600" />
                  <span>Career & Placement Prospects</span>
                </h3>
                <p className="text-slate-600 mb-2">{program.careerDetails.overview}</p>
                <div className="text-xs font-semibold text-slate-500">{program.careerDetails.placementAssistance}</div>
              </div>
            )}

          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>

            <Link
              to="/apply"
              className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
