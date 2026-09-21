import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, FileText, ArrowRight, ShieldAlert, Award } from "lucide-react";
import "./AdmissionProcedure.css";

const procedureSteps = [
  {
    step: "01",
    title: "Choose Your Program",
    subtitle: "Select your specialization across Undergraduate or Postgraduate schools.",
    points: [
      "Review eligibility criteria, duration, and curriculum structure for your desired degree.",
      "Option to consult International Academic Advisors for program guidance.",
      "Check if specific prerequisite coursework (e.g. PCM / PCB / Humanities) is required.",
    ],
  },
  {
    step: "02",
    title: "Check Eligibility",
    subtitle: "Verify academic equivalence and minimum mark requirements.",
    points: [
      "UG Applicants: Completion of 10+2 / High School Diploma / A-Levels recognized equivalent to Indian Higher Secondary.",
      "PG Applicants: Bachelor's Degree in relevant discipline from a recognized foreign university.",
      "Medium of instruction in English or English Proficiency proof.",
    ],
  },
  {
    step: "03",
    title: "Prepare Required Documents",
    subtitle: "Assemble clear digital copies of official certificates and identification.",
    points: [
      "Valid International Passport copy (first & last pages with min 6 months validity).",
      "Official high school transcripts / marksheets and degree certificates.",
      "AIU Equivalence Certificate (Association of Indian Universities) if applicable.",
    ],
  },
  {
    step: "04",
    title: "Submit Application",
    subtitle: "Complete the online international student registration.",
    points: [
      "Access Sandip University official International Admissions Portal.",
      "Enter personal bio, contact address, nationality, and choice of school.",
      "Upload scanned document proofs and submit the application for verification.",
    ],
  },
  {
    step: "05",
    title: "Application Verification",
    subtitle: "Document scrutiny and credential evaluation by the International Cell.",
    points: [
      "The International Admissions Committee verifies submitted transcripts against university benchmarks.",
      "Verification typically takes 3 to 5 business days.",
      "You will receive email updates or request for additional documents if needed.",
    ],
  },
  {
    step: "06",
    title: "Admission Confirmation",
    subtitle: "Issuance of official Provisional Allotment & Offer Letter.",
    points: [
      "Successful applicants receive an official Provisional Offer Letter via email.",
      "The offer letter includes tuition fee details, hostel options, and payment deadlines.",
      "A seat reservation window is specified to accept the offer.",
    ],
  },
  {
    step: "07",
    title: "Fee Payment",
    subtitle: "Remit processing and tuition fee via International Wire Transfer.",
    points: [
      "Use official Sandip University SWIFT / Wire Transfer bank details.",
      "Always quote your Applicant ID and Full Name in wire transfer remarks.",
      "Upload bank transaction receipt to the portal for quick confirmation.",
    ],
  },
  {
    step: "08",
    title: "Enrollment & Next Steps",
    subtitle: "Final admission letter, Student Visa, and campus arrival.",
    points: [
      "Receive Final Admission Letter required for Indian Embassy Student Visa processing.",
      "Coordinate arrival date with the International Desk for airport reception.",
      "Report to campus for physical document verification, FRRO registration, and orientation.",
    ],
  },
];

export default function AdmissionProcedure() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = procedureSteps[selectedIdx];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Step-by-Step Directives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Admission Procedure
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Follow the detailed protocol below to ensure smooth processing of your international application.
          </p>
        </div>

        {/* Vertical Navigation + Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Vertical Step List */}
          <div className="lg:col-span-5 space-y-2">
            {procedureSteps.map((step, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md translate-x-1"
                      : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-orange-50/40 hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-sans text-xs font-black ${isSelected ? "text-orange-400" : "text-orange-600"}`}>
                      {step.step}
                    </span>
                    <span className="text-sm font-bold leading-tight">
                      {step.title}
                    </span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-orange-400 translate-x-1" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Detailed Content Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-sans font-bold uppercase mb-4">
                  <span>STEP {current.step} DETAILS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  {current.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-6 font-medium">
                  {current.subtitle}
                </p>

                <div className="space-y-3.5 pt-4 border-t border-slate-200">
                  {current.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Sandip International Cell Guidelines</span>
                  <span className="text-orange-600 font-bold">Step {selectedIdx + 1} of {procedureSteps.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
