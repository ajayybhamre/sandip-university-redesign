import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  X,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  IndianRupee,
  Briefcase,
  CheckCircle2,
  Clock,
  Award,
  Building2,
  Sparkles,
  Layers,
  FileCheck2,
  Users
} from "lucide-react";

export default function ProgramDetailView({ program, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!program) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "eligibility", label: "Eligibility", icon: ShieldCheck },
    { id: "curriculum", label: "Curriculum", icon: GraduationCap },
    { id: "fees", label: "Fees", icon: IndianRupee },
    { id: "career", label: "Career", icon: Briefcase }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      
      {/* Modal Container: Max 768px (3xl), 16px radius */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-white w-full max-w-3xl rounded-[16px] shadow-2xl overflow-hidden border border-slate-200 flex flex-col my-8 max-h-[90vh]"
      >
        {/* ==========================================
            1. MODAL HEADER (Primary Navy Gradient)
        ========================================== */}
        <div className="relative bg-gradient-to-r from-[#0F1B2B] via-[#162a42] to-[#0D9488] p-6 text-white flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-[#2DD4BF] border border-white/15 uppercase">
                {program.level} Degree
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-slate-200 border border-white/15">
                {program.approval}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock size={12} className="text-[#2DD4BF]" /> {program.duration}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {program.title}
            </h2>

            <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
              <Building2 size={14} className="text-[#2DD4BF]" />
              <span>{program.school}</span>
            </p>
          </div>

          {/* Close X Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* ==========================================
            2. TABS NAVIGATION BAR
        ========================================== */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((t) => {
            const IconComponent = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-[8px] transition-all duration-150 cursor-pointer border-b-2 ${
                  isActive
                    ? "bg-white text-[#0F1B2B] border-[#0D9488] shadow-2xs"
                    : "text-[#667085] hover:text-[#0F1B2B] border-transparent"
                }`}
              >
                <IconComponent size={14} className={isActive ? "text-[#0D9488]" : ""} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==========================================
            3. TAB CONTENT PANE
        ========================================== */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-[#0F1B2B] text-xs sm:text-sm leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-serif font-bold text-[#0F1B2B]">
                  Full Program Description
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {program.overview}
                </p>
              </div>

              {/* Info Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#667085] uppercase">Degree Level</span>
                  <p className="text-sm font-bold text-[#0F1B2B]">{program.level} Degree</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#667085] uppercase">Duration</span>
                  <p className="text-sm font-bold text-[#0F1B2B]">{program.duration}</p>
                </div>
              </div>

              {/* Specializations List */}
              {program.specializations && program.specializations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-[#0F1B2B] uppercase tracking-wider">
                    Available Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-[6px] bg-teal-50 text-[#0D9488] font-semibold text-xs border border-teal-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: ELIGIBILITY */}
          {activeTab === "eligibility" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-serif font-bold text-[#0F1B2B]">
                  Admission Eligibility Requirements
                </h3>
                <p className="text-xs text-[#667085]">
                  Detailed academic qualification prerequisites formatted for clarity.
                </p>
              </div>

              {program.eligibilityRequirements ? (
                <div className="space-y-3">
                  {program.eligibilityRequirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1"
                    >
                      <h4 className="text-xs font-bold text-[#0F1B2B] flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-[#0D9488]" />
                        <span>{req.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 pl-5">
                        {req.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 text-xs">
                  {program.compactEligibility}
                </div>
              )}

              {/* Category-Specific Relaxation Note */}
              {program.relaxationNote && (
                <div className="p-3.5 bg-teal-50 rounded-[8px] border border-teal-200 text-xs text-[#0D9488] font-medium flex items-start gap-2">
                  <Sparkles size={14} className="text-[#0D9488] flex-shrink-0 mt-0.5" />
                  <span><strong>Note on Category Relaxations:</strong> {program.relaxationNote}</span>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 3: CURRICULUM */}
          {activeTab === "curriculum" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              {program.curriculumDetails ? (
                <>
                  {/* OBE Mention */}
                  <div className="p-3.5 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                    <span className="text-[10px] font-semibold text-[#0D9488] uppercase block">Academic Framework</span>
                    <p className="text-xs font-semibold text-[#0F1B2B]">{program.curriculumDetails.model}</p>
                  </div>

                  {/* Industry Courses with Teal Accent Dots */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#0F1B2B] uppercase tracking-wider">
                      Industry-Relevant Courses
                    </h4>
                    <ul className="space-y-2">
                      {program.curriculumDetails.industryCourses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-1 flex-shrink-0"></span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-On Training Highlights */}
                  {program.curriculumDetails.handsOnHighlights && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#0F1B2B] uppercase tracking-wider">
                        Hands-On Training Highlights
                      </h4>
                      <ul className="space-y-2">
                        {program.curriculumDetails.handsOnHighlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 size={14} className="text-[#0D9488] flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-xs text-slate-500">
                  Curriculum overview available in official prospectus.
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 4: FEES */}
          {activeTab === "fees" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              {program.feeDetails ? (
                <>
                  {/* General Fee Structure Note */}
                  <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                    <span className="text-[10px] font-semibold text-[#0D9488] uppercase block">General Fee Note</span>
                    <p className="text-xs font-semibold text-[#0F1B2B]">{program.feeDetails.generalNote}</p>
                  </div>

                  {/* Additional Charges List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#0F1B2B] uppercase tracking-wider">
                      Additional Applicable Charges
                    </h4>
                    <ul className="space-y-1.5">
                      {program.feeDetails.additionalCharges.map((chg, idx) => (
                        <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                          <span>{chg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hostel, Transportation, Uniform Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-semibold text-[#667085] uppercase">Hostel Info</span>
                      <p className="text-xs text-slate-700 leading-snug">{program.feeDetails.hostelInfo}</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-semibold text-[#667085] uppercase">Transportation</span>
                      <p className="text-xs text-slate-700 leading-snug">{program.feeDetails.transportInfo}</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-semibold text-[#667085] uppercase">Uniform Info</span>
                      <p className="text-xs text-slate-700 leading-snug">{program.feeDetails.uniformInfo}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-xs text-slate-500">
                  Fee details available upon consultation.
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 5: CAREER */}
          {activeTab === "career" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              {program.careerDetails ? (
                <>
                  <div className="space-y-1">
                    <h3 className="text-sm font-serif font-bold text-[#0F1B2B]">
                      Career Opportunities Overview
                    </h3>
                    <p className="text-xs text-slate-600">
                      {program.careerDetails.overview}
                    </p>
                  </div>

                  {/* Highlights Bullet Points with Accent Dots */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#0F1B2B] uppercase tracking-wider">
                      Placement & Salary Highlights
                    </h4>
                    <ul className="space-y-2">
                      {program.careerDetails.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-1 flex-shrink-0"></span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Placement Assistance & Alumni Network Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-semibold text-[#0D9488] uppercase block">Placement Assistance</span>
                      <p className="text-xs text-slate-700 leading-normal">{program.careerDetails.placementAssistance}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-[8px] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-semibold text-[#0D9488] uppercase block">Global Alumni Network</span>
                      <p className="text-xs text-slate-700 leading-normal">{program.careerDetails.alumniNetwork}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-xs text-slate-500">
                  Career information available upon inquiry.
                </div>
              )}
            </motion.div>
          )}

        </div>

        {/* ==========================================
            4. MODAL FOOTER
        ========================================== */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-[8px] bg-white hover:bg-slate-100 border border-slate-200 text-[#0F1B2B] font-semibold text-xs transition-all active:scale-97 cursor-pointer"
          >
            Close
          </button>
          <Link
            to="/apply"
            className="px-6 py-2.5 rounded-[8px] bg-[#0F1B2B] hover:bg-[#0D9488] text-white font-semibold text-xs transition-all active:scale-97 cursor-pointer shadow-2xs"
          >
            Apply Now
          </Link>
        </div>

      </motion.div>
    </div>
  );
}
