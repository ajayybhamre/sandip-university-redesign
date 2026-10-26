import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { lifeSlides } from "../homeData";

/* "Life at Sandip" — strip of tilted cards that rise in one after another. */
export default function LifeStrip() {

  return (
    <section
      id="campus-life"
      className="relative overflow-hidden bg-[#FAF8F5] py-24 dark:bg-[#0B0B0D] lg:py-32"
    >
      <SectionBg variants={["diagonal", "noise"]} />

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div>
            <span
              data-aos="fade-right"
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]"
            >
              Life at Sandip
            </span>
            <SplitHeading
              variant="rise"
              className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
              parts={[
                { t: "The classroom is " },
                { br: true },
                { t: "only half the campus.", className: "text-[#C8102E]" },
              ]}
            />
          </div>

        </div>

        {/* ---------- tilted card strip ---------- */}
        <div className="group/rail relative mt-6 overflow-hidden pb-16 pt-10">
          <style>{`
            @keyframes life-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            @media (prefers-reduced-motion: reduce) { .life-track { animation: none !important; } }
          `}</style>
          <div
            data-aos="fade-up"
            className="life-track flex w-max group-hover/rail:[animation-play-state:paused]"
            style={{ animation: `life-marquee ${lifeSlides.length * 6}s linear infinite` }}
          >
            {[...lifeSlides, ...lifeSlides].map((s, i) => (
              <div key={i} className="mr-7 shrink-0" aria-hidden={i >= lifeSlides.length}>
                <article
                  className={`group relative h-[390px] w-[270px] overflow-hidden rounded-[30px] text-white shadow-xl shadow-slate-900/25 transition duration-500 hover:z-10 hover:-translate-y-3 hover:rotate-0 sm:h-[430px] sm:w-[300px] ${
                    (i % lifeSlides.length) % 2 === 0 ? "-rotate-3" : "translate-y-6 rotate-2"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/45 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-widest backdrop-blur-md">
                    {String((i % lifeSlides.length) + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-xl font-extrabold leading-tight">{s.title}</div>
                    <div className="mt-1.5 max-h-0 overflow-hidden text-[14px] leading-snug text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {s.text}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
