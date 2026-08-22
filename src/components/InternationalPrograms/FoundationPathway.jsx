import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen, CheckCircle2, Award, Clock, Users, ChevronDown } from "lucide-react";
import "./FoundationPathway.css";

const foundationModules = [
  { title: "Academic English & Communication", desc: "Intensive training in written academic English, presentation skills, and university terminology." },
  { title: "Foundation Mathematics & Computing", desc: "Basic calculus, statistics, logic building, and introductory computer application tools." },
  { title: "Domain Foundations (Science / Business)", desc: "Introductory concepts in Physics/Chemistry for Engineering, or Economics/Accounting for Business." },
  { title: "Study Skills & Research Methodology", desc: "Time management, analytical writing, library research, and digital learning platforms." },
  { title: "Cultural Assimilation & Orientation", desc: "Campus integration, Indian heritage orientation, and cross-cultural communication." },
];

export default function FoundationPathway() {
  const [showModules, setShowModules] = useState(false);

  return (
    <section id="foundation-pathway" className="py-20 bg-slate-900 text-white relative overflow-hidden my-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
            Preparatory Academic Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
            Need a Stronger Start?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            The International Foundation Program is designed for students who require additional academic, language, or prerequisite preparation before entering their degree.
          </p>
        </div>

        {/* Pathway Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 relative">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="font-mono text-xs font-bold text-orange-400">STAGE 01</span>
            <h3 className="font-bold text-white text-base mt-1">Foundation Program</h3>
            <p className="text-xs text-slate-400 mt-1">1-Year Preparatory Course</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="font-mono text-xs font-bold text-orange-400">STAGE 02</span>
            <h3 className="font-bold text-white text-base mt-1">Academic Preparation</h3>
            <p className="text-xs text-slate-400 mt-1">English & Core Prerequisites</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="font-mono text-xs font-bold text-orange-400">STAGE 03</span>
            <h3 className="font-bold text-white text-base mt-1">Degree Entry</h3>
            <p className="text-xs text-slate-400 mt-1">Direct Progression into B.Tech/BBA</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="font-mono text-xs font-bold text-orange-400">STAGE 04</span>
            <h3 className="font-bold text-white text-base mt-1">Career Pathway</h3>
            <p className="text-xs text-slate-400 mt-1">Global Employment Opportunities</p>
          </div>
        </div>

        {/* Featured Foundation Program Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold uppercase mb-2">
                <span>International Student Pathway</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                International Foundation Program (IFP)
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-orange-300 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl self-start md:self-auto">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Duration: 1 Year (2 Semesters)</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Designed for international applicants who completed 11 or 12 years of foreign schooling and need to bridge academic credits or improve English medium proficiency. Upon successful completion, students seamlessly transition into their 1st year degree program.
          </p>

          {/* Quick Details Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase">ELIGIBILITY</div>
              <div className="text-sm font-bold text-white mt-0.5">High School Pass (Grade 11/12)</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase">PROGRESSION</div>
              <div className="text-sm font-bold text-white mt-0.5">Direct 1st Year Degree Entry</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase">ASSISTANCE</div>
              <div className="text-sm font-bold text-white mt-0.5">Dedicated Academic Tutors</div>
            </div>
          </div>

          {/* Module Breakdown Expandable Section */}
          <div className="pt-4">
            <button
              onClick={() => setShowModules(!showModules)}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>{showModules ? "Hide Foundation Curriculum" : "Explore Foundation Pathway"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showModules ? "rotate-180" : ""}`} />
            </button>

            {showModules && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-6 space-y-3 pt-4 border-t border-white/10"
              >
                <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest mb-3">FOUNDATION COURSE MODULES</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {foundationModules.map((mod, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div className="font-bold text-white text-sm mb-1">{mod.title}</div>
                      <div className="text-slate-300">{mod.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
