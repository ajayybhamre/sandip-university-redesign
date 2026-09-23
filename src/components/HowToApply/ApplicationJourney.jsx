import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, CheckCircle2, FileText, Send, SearchCheck, Award, CreditCard, UserCheck, ArrowRight } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import "./ApplicationJourney.css";

const journeySteps = [
  {
    num: "01",
    title: "Explore Programs",
    icon: Compass,
    short: "Browse available UG/PG degrees.",
    detail: "Discover undergraduate and postgraduate degree specializations offered across Sandip University's 7 specialized schools.",
  },
  {
    num: "02",
    title: "Check Eligibility",
    icon: CheckCircle2,
    short: "Review academic criteria & AIU guidelines.",
    detail: "Verify High School / Bachelor's grade requirements, English medium of instruction, and AIU equivalence eligibility.",
  },
  {
    num: "03",
    title: "Prepare Documents",
    icon: FileText,
    short: "Gather transcripts, passport & photos.",
    detail: "Collect clear scanned copies of your passport, marksheets, degree certificates, and passport-size photographs.",
  },
  {
    num: "04",
    title: "Submit Application",
    icon: Send,
    short: "Fill online portal with student details.",
    detail: "Submit your online international application form through our dedicated student portal.",
  },
  {
    num: "05",
    icon: SearchCheck,
    title: "Application Review",
    short: "Admissions office verifies documents.",
    detail: "Our International Admissions Cell reviews academic qualifications and document authenticity within 3-5 working days.",
  },
  {
    num: "06",
    icon: Award,
    title: "Receive Admission Decision",
    short: "Get your official Provisional Offer Letter.",
    detail: "Qualified candidates receive an official Provisional Allotment Letter detailing fee structure and next steps.",
  },
  {
    num: "07",
    icon: CreditCard,
    title: "Pay Fees",
    short: "Remit processing/tuition via Wire Transfer.",
    detail: "Complete fee payment via official International Wire Transfer or online portal to confirm seat reservation.",
  },
  {
    num: "08",
    icon: UserCheck,
    title: "Complete Enrollment",
    short: "Obtain visa, arrive on campus & report.",
    detail: "Receive Final Admission Letter, apply for Student Visa, arrange travel, and attend campus orientation.",
  },
];

export default function ApplicationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = journeySteps[activeStep];
  const IconComp = current.icon;

  return (
    <section id="application-journey" className="py-20 bg-[#FAF8F5] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Complete Application Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Application Journey <span className="text-[#C8102E]">Overview</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Click any step to preview detailed requirements for each stage of your admission process.
          </p>
        </div>

        {/* Stepper Navigation Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xl scale-105"
                      : "bg-white text-slate-900 border-slate-200 hover:border-[#C8102E]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-sans font-black ${isActive ? "text-white/80" : "text-[#C8102E]"}`}>
                      {step.num}
                    </span>
                    <StepIcon size={16} className={isActive ? "text-white" : "text-slate-400"} />
                  </div>
                  <span className="text-xs font-extrabold line-clamp-2 leading-tight">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel */}
        <TiltCard>
          <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#C8102E] text-xs font-black uppercase tracking-wider">
                  <span>STEP {current.num} OF 08</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {current.title}
                </h3>

                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {current.detail}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-24 h-24 rounded-3xl bg-red-50 text-[#C8102E] border border-red-200 flex items-center justify-center shadow-lg">
                  <IconComp size={48} />
                </div>
              </div>

            </div>
          </SpotlightCard>
        </TiltCard>

      </div>
    </section>
  );
}
