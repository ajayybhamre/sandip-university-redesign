import recruiters from "./recruiterData";
import "./recruiter.css";

export default function Recruiters() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] uppercase tracking-[3px] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
            <span>Trusted Recruiters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Our Students Work With Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Leading national and global companies recruit Sandip University graduates every year.
          </p>
        </div>
      </div>

      <div className="relative mt-16 recruiter-slider">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 w-32 sm:w-48 h-full bg-gradient-to-r from-[#FAF8F5] dark:from-zinc-950 to-transparent z-10"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 w-32 sm:w-48 h-full bg-gradient-to-l from-[#FAF8F5] dark:from-zinc-950 to-transparent z-10"></div>
        
        <div className="recruiter-track">
          {[...recruiters, ...recruiters].map((logo, index) => (
            <div
              key={index}
              className="w-52 h-32 mx-3 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl flex items-center justify-center p-6 transition-all duration-300 hover:-translate-y-1.5 shrink-0"
            >
              <img
                src={logo}
                alt="Recruiter"
                className="h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}