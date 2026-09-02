import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Calendar, Award } from "lucide-react";
import students from "./studentData";
import events from "./eventData";

export default function StudentSuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter 4 unique student stories for the showcase rail
  const uniqueStudents = students.slice(0, 4);
  const activeStudent = uniqueStudents[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? uniqueStudents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === uniqueStudents.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="student-success" className="relative py-20 lg:py-28 bg-[#FDFBF7] dark:bg-[#0c0c0d] text-slate-900 dark:text-white overflow-hidden border-t border-slate-200/70 dark:border-zinc-800 transition-colors duration-300">
      
      {/* 1. SOFT RED GRADIENT AMBIENT GLOW BEHIND FEATURED STUDENT */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8102E]/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-rose-200/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* 2. OVERSIZED LOW-OPACITY BACKGROUND TYPOGRAPHY: "SUCCESS" */}
      <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[140px] sm:text-[200px] lg:text-[260px] font-black text-slate-900/[0.03] tracking-widest leading-none uppercase block translate-y-6">
          SUCCESS
        </span>
      </div>

      {/* 3. ANIMATED VISUAL JOURNEY PATH (BEHIND STUDENT AREA) */}
      <div className="absolute inset-0 pointer-events-none z-5 opacity-25 overflow-hidden">
        <svg className="w-full h-full text-[#C8102E]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M-100,320 C350,180 750,440 1540,240"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeDasharray="8 4"
            fill="none"
            className="animate-[journeyPathFlow_22s_linear_infinite]"
          />
          <circle cx="350" cy="240" r="3.5" fill="#C8102E" className="animate-pulse" />
          <circle cx="820" cy="360" r="3.5" fill="#D4AF37" className="animate-pulse delay-500" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TOP HEADER AREA & TYPOGRAPHY-LED HIGHLIGHTS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-slate-200/80 pb-8">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#C8102E] tracking-wider uppercase mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>STUDENT SUCCESS STORIES</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-3">
              Where Our Students <span className="text-[#C8102E]">Create Success Stories</span>
            </h2>

            {/* Concise Supporting Description */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              From global corporate placements to research fellowships, Sandip University graduates lead with distinction worldwide.
            </p>
          </div>

          {/* Typography-Led Placement Highlights */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#C8102E] tracking-tight block">100%</span>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Placement Support</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight block">₹1.12 CPA</span>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Highest Offer</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight block">250+</span>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Top Recruiters</span>
            </div>
          </div>
        </div>

        {/* EDITORIAL FEATURED STUDENT SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14">
          
          {/* LEFT/CENTER: Large High-Quality Student Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-[380px] sm:h-[440px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200/90 group bg-white">
              <img
                src={activeStudent.image}
                alt={activeStudent.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-black uppercase tracking-wider text-[#C8102E] shadow-md">
                {activeStudent.category}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-slate-200 block mb-1">
                  {activeStudent.course} — Sandip University
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                  {activeStudent.name}
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT: Featured Student Info, Package & Achievement */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            <div>
              {/* Header Badge & Navigation Controls */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-[11px] font-extrabold text-[#C8102E] uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>FEATURED ALUMNUS</span>
                </div>

                {/* 01 / 04 Counter & Navigation */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    0{currentIndex + 1} / 0{uniqueStudents.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Student"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/80 hover:bg-[#C8102E] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Student"
                    className="w-8 h-8 rounded-full bg-white border border-slate-200/80 hover:bg-[#C8102E] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Student Name */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2">
                {activeStudent.name}
              </h3>

              {/* Program & Company Role */}
              <p className="text-sm font-bold text-slate-500 mb-6">
                {activeStudent.course} • <span className="text-slate-900">{activeStudent.achievement}</span> at <span className="text-[#C8102E]">{activeStudent.company}</span>
              </p>

              {/* Company Logo & PROMINENT PACKAGE */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-6 mb-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-2 border border-slate-200/60 shadow-2xs">
                    <img src={activeStudent.logo} alt={activeStudent.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 leading-tight">
                      {activeStudent.company}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      From Sandip University to a global career.
                    </span>
                  </div>
                </div>

                {/* Visually Prominent Package */}
                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-4xl font-black text-[#C8102E] tracking-tight block">
                    {activeStudent.package}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    ANNUAL PACKAGE
                  </span>
                </div>
              </div>

              {/* Success Statement */}
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                "{activeStudent.name} secured a high-impact role at {activeStudent.company} with a package of {activeStudent.package}, exemplifying the world-class education and industry readiness fostered at Sandip University."
              </p>
            </div>

            {/* View Full Story CTA Link */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#C8102E] hover:underline transition-colors group cursor-pointer"
              >
                <span>View Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* BOTTOM HORIZONTAL SUCCESS STORIES RAIL (4 THUMBNAILS) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {uniqueStudents.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-2xl text-left transition-all duration-300 cursor-pointer flex items-center gap-3 relative ${
                currentIndex === idx
                  ? "bg-white border-2 border-[#C8102E] shadow-md -translate-y-1"
                  : "bg-white/80 border border-slate-200/80 hover:border-slate-400"
              }`}
            >
              <div className="relative shrink-0">
                <img src={st.image} alt={st.name} className="w-12 h-12 rounded-xl object-cover" />
                {currentIndex === idx && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C8102E] border-2 border-white animate-ping"></span>
                )}
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-slate-900 truncate leading-tight">
                  {st.name}
                </h4>
                <span className="text-[11px] text-[#C8102E] font-black truncate block">
                  {st.package}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* COMPACT MINIMAL HORIZONTAL UPCOMING CAMPUS EVENTS STRIP */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C8102E]" />
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900">
                UPCOMING CAMPUS EVENTS
              </h3>
            </div>

            <Link to="/about" className="text-xs font-bold text-[#C8102E] hover:underline flex items-center gap-1 transition-colors">
              <span>View All Events →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {events.slice(0, 3).map((ev, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-3 shadow-2xs hover:border-[#C8102E]/40 transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  {/* Date Badge */}
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200/80 flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-black text-[#C8102E] leading-none">{ev.date}</span>
                    <span className="text-[9px] font-black uppercase text-slate-500 mt-0.5">{ev.month}</span>
                  </div>

                  {/* Details */}
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-slate-900 truncate leading-tight mb-0.5">
                      {ev.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      {ev.category} • {ev.time}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded CSS keyframe */}
      <style>{`
        @keyframes journeyPathFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
      `}</style>
    </section>
  );
}
