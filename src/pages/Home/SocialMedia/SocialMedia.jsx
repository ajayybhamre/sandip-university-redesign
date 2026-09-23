import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export default function SocialMedia() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#FAF6EE] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* High-Impact Glossy Sandip Red Admissions CTA Banner */}
        <div className="bg-gradient-to-r from-[#C8102E] via-[#A00C24] to-[#700918] rounded-[36px] lg:rounded-[48px] p-8 sm:p-14 lg:p-20 text-white shadow-2xl border border-white/20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-amber-200 uppercase tracking-[4px] mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></span>
              <span>ADMISSIONS OPEN 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Shape Your Future at Sandip University?
            </h2>

            <p className="text-base sm:text-lg text-rose-100 font-medium leading-relaxed mb-10">
              Join thousands of successful students and embark on a transformative educational journey with world-class infrastructure and 100% placement support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/apply"
                className="bg-white hover:bg-slate-100 text-[#C8102E] font-black text-sm px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
              >
                <span>Apply Now</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#C8102E] border border-white/30 text-white font-bold text-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}