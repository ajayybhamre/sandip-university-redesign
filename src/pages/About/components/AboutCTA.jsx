import { Link } from "react-router-dom";
import { ArrowRight, FileEdit, PhoneCall, BookOpen } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#1C1714] text-white transition-colors duration-300 relative overflow-hidden border-t border-[#332C24]">
      {/* Subtle Background Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8102E]/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2A221C] border border-[#3D3228] inline-block mb-6 shadow-sm">
          YOUR FUTURE STARTS HERE
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3EFE9] leading-tight mb-6 font-sans">
          Discover <span className="text-[#C8102E]">Sandip University</span>
        </h2>

        <p className="text-base sm:text-lg text-[#C5BBB0] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Take the next step toward a world-class education, groundbreaking research opportunities, and global career success.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#2B231D] hover:bg-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md"
          >
            <BookOpen size={16} className="text-[#C8102E]" />
            <span>Explore Programs</span>
          </Link>

          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C8102E] hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-950/40"
          >
            <FileEdit size={16} />
            <span>Apply Now 2026-27</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#26201B] border border-[#3D3328] text-slate-200 hover:text-white hover:border-[#574B3C] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
          >
            <PhoneCall size={16} />
            <span>Contact Admissions</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
