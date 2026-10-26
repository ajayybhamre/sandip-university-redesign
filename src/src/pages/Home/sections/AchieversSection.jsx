import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { achievementsData } from "../StudentAchievements/achievementsData";

gsap.registerPlugin(ScrollTrigger);

/* Cards lean towards the centre like the "Engage audiences" sample (perspective row),
   and each photo has the vertical black name bar from the "Placed Globally" sample.
   Uses every entry in your existing achievementsData.js. */
const items = achievementsData;

export default function AchieversSection() {
  const section = useRef(null);
  const rail = useRef(null);

  /* ---- entrance: cards fly in from outside the screen towards the centre ---- */
  useLayoutEffect(() => {
    const el = section.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-card]");

      gsap.from(cards, {
        x: (i) => (i % items.length < items.length / 2 ? -1 : 1) * Math.min(window.innerWidth * 0.55, 700),
        rotate: (i) => (i % items.length < items.length / 2 ? -22 : 22),
        scale: 0.8,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        stagger: { each: 0.04, from: "center" },
        scrollTrigger: { trigger: rail.current, start: "top 82%", once: true },
      });

      // doodle arrow draws itself
      gsap.from("[data-doodle]", {
        strokeDashoffset: 260,
        duration: 1.4,
        ease: "power2.inOut",
        delay: 0.4,
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="achievers"
      className="relative overflow-hidden bg-[#FAF8F5] py-24 dark:bg-[#0B0B0D] lg:py-32"
    >
      <SectionBg variants={["dots", "noise"]} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
        <span
          data-aos="zoom-in"
          className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-900"
        >
          <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
          Proud moments, every year
        </span>

        <div className="relative mx-auto max-w-4xl">
          <SplitHeading
            variant="rise"
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            parts={[
              { t: "Where hard work" },
              { br: true },
              { t: "gets its ", },
              { t: "moment.", className: "text-[#C8102E]" },
            ]}
          />

          {/* hand-drawn note + arrow (like the sample's "Elevate your brand") */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-0 hidden w-44 -rotate-6 text-left lg:block xl:-right-10"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="900"
              className="text-[22px] italic leading-tight text-slate-700 dark:text-slate-200"
              style={{ fontFamily: "'Caveat', 'Segoe Script', 'Bradley Hand', cursive" }}
            >
              our students,
              <br />
              our pride
            </div>
            <svg viewBox="0 0 120 80" className="mt-1 h-16 w-28 text-slate-700 dark:text-slate-200" fill="none">
              <path
                data-doodle
                d="M8 8 C 50 6, 96 22, 100 66 M100 66 l-11 -12 M100 66 l12 -9"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 260 }}
              />
            </svg>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Gold medals, record offers and national wins. Meet the students who make Sandip University
          proud.
        </div>
      </div>

      {/* ---------- continuous card row ---------- */}
      <div className="group/rail relative z-10 mt-14 overflow-hidden pb-12 pt-6">
        <style>{`
          @keyframes ach-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @media (prefers-reduced-motion: reduce) { .ach-track { animation: none !important; } }
        `}</style>
        <div
          ref={rail}
          className="ach-track flex w-max group-hover/rail:[animation-play-state:paused]"
          style={{ animation: `ach-marquee ${items.length * 5}s linear infinite` }}
        >
          {[...items, ...items].map((a, i) => {
            const tilt = (i % items.length) % 2 === 0 ? -3 : 3;
            return (
              <div key={i} data-card className="mr-7 shrink-0" aria-hidden={i >= items.length}>
              <article
                className="group relative h-[390px] w-[270px] sm:h-[410px] sm:w-[285px]"
                style={{ transform: `rotate(${tilt}deg)`, transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) translateY(-12px) scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${tilt}deg)`)}
              >
                {/* photo */}
                <div className="absolute inset-y-0 left-0 right-9 overflow-hidden rounded-[22px] bg-slate-200 shadow-xl shadow-slate-900/20 dark:bg-zinc-800">
                  <img
                    src={a.image}
                    alt={a.studentName}
                    loading="lazy"
                    draggable={false}
                    className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                      a.imagePositionCard || ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {a.metric && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#C8102E] px-3 py-1 text-xs font-bold text-white shadow-md">
                      {a.metric}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 pr-12">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-200">
                      {a.category}
                    </div>
                    <div className="mt-1 line-clamp-2 text-[15px] font-bold leading-snug text-white">
                      {a.title}
                    </div>
                  </div>
                </div>

                {/* vertical black name bar */}
                <div className="absolute bottom-0 right-0 top-[16%] w-[60px] overflow-hidden rounded-[6px] bg-black text-white shadow-lg transition-[top] duration-500 group-hover:top-[6%] bg-white-keep">
                  <div
                    className="flex h-full items-end justify-start gap-2 px-2 py-3"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    <span className="max-h-full truncate text-[15px] font-bold leading-none">
                      {a.studentName}
                    </span>
                    <span className="max-h-full truncate text-[12px] leading-none text-white/75">
                      {a.department} &middot; {a.year}
                    </span>
                  </div>
                </div>
              </article>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
