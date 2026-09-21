import quickLinks from "./quickLinksData";

export default function QuickLinks() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-6 py-6">
      {/* Outer White Rounded Card Container */}
      <div className="bg-white dark:bg-zinc-900 rounded-[28px] shadow-2xl border border-slate-200/80 dark:border-zinc-800 p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-zinc-800/80">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.target)}
                style={{
                  animationName: "fadeInUpQuickLink",
                  animationDuration: "0.6s",
                  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  animationFillMode: "both",
                  animationDelay: `${index * 90}ms`,
                }}
                className="group relative pt-4 pb-3 sm:py-4 px-3 flex flex-col items-center justify-center cursor-pointer bg-transparent border border-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 sm:hover:-translate-y-2"
              >
                {/* Light Red Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/30 text-[#C8102E] flex items-center justify-center mb-3 transition-all duration-300 ease-out group-hover:bg-[#C8102E]/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/15 shrink-0">
                  <Icon className="text-2xl sm:text-3xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-[#C8102E] transition-colors duration-300 text-center leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300 text-center mt-0.5">
                  {item.subtitle}
                </p>

                {/* Animated Underline */}
                <span className="h-0.5 w-0 group-hover:w-7 bg-[#C8102E] rounded-full transition-all duration-300 ease-out mt-2 opacity-0 group-hover:opacity-100"></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inline Stagger Animation Keyframes */}
      <style>{`
        @keyframes fadeInUpQuickLink {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}