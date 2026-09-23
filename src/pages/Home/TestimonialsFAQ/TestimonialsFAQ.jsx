import ReviewSlider from "./ReviewSlider";
import FAQ from "./FAQ";

export default function TestimonialsFAQ() {
  return (
    <section className="relative overflow-hidden rounded-[36px] lg:rounded-[56px] bg-[#FAF6EE] text-slate-900 my-12 py-20 lg:py-28 border border-slate-200/80 shadow-lg transition-colors duration-300">
      
      {/* SOFT CRIMSON AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/8 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#C8102E] uppercase tracking-[4px] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
            <span>Testimonials & Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What Our Students Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover how our students transformed their careers through
            quality education, practical learning, and industry exposure.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Testimonials + Latest News */}
          <div className="space-y-8">
            {/* Review Slider */}
            <ReviewSlider />

            {/* Latest News / Campus Highlights */}
            <div className="bg-white border border-slate-200/90 rounded-[32px] p-6 sm:p-8 text-slate-900 shadow-md">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <span className="uppercase tracking-[3px] text-[#C8102E] text-xs font-extrabold">
                    Latest News
                  </span>
                  <h3 className="text-2xl font-bold mt-1 text-slate-900">
                    Campus Highlights
                  </h3>
                </div>

                <button className="text-xs font-bold text-[#C8102E] hover:text-red-700 transition flex items-center gap-1">
                  <span>View All</span>
                  <span>→</span>
                </button>
              </div>

              <div className="space-y-6">
                {/* News 1 */}
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#C8102E] text-white flex flex-col items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                    <span className="text-lg font-black leading-none">15</span>
                    <span className="text-[10px] uppercase font-bold mt-0.5">Jul</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900 group-hover:text-[#C8102E] transition-colors">
                      AI & Robotics Innovation Lab inaugurated
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                      Students now have access to advanced AI research facilities.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100"></div>

                {/* News 2 */}
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                    <span className="text-lg font-black leading-none">20</span>
                    <span className="text-[10px] uppercase font-bold mt-0.5">Jul</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900 group-hover:text-[#C8102E] transition-colors">
                      International Research Summit 2026
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                      Experts from 15+ countries will participate in the summit.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100"></div>

                {/* News 3 */}
                <div className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                    <span className="text-lg font-black leading-none">28</span>
                    <span className="text-[10px] uppercase font-bold mt-0.5">Jul</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-slate-900 group-hover:text-[#C8102E] transition-colors">
                      1000+ Placement Offers Achieved
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                      Leading recruiters visited the campus during placement week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FAQ */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#C8102E] uppercase tracking-[3px] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
                <span>FAQ</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h3>

              <p className="text-sm text-slate-600 font-medium mt-2">
                Everything you need to know before taking admission.
              </p>
            </div>

            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}