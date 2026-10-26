import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { lifeSlides } from "../homeData";

/* 12 positions around the ring (the 8 slides repeat) so the arc shows
   about 5-7 cards at once, like a flat-ish "round carousel". */
const RING = 12;
const STEP = 360 / RING;
const SLIDES = lifeSlides.length;
const ring = Array.from({ length: RING }, (_, i) => lifeSlides[i % SLIDES]);

/* Round 3D carousel: cards sit on a cylinder that rotates. */
export default function CampusLife3D() {
  const reduce = useReducedMotion();
  const stage = useRef(null);
  const drag = useRef(null);
  const [angle, setAngle] = useState(0);
  const [hover, setHover] = useState(false);
  const [dims, setDims] = useState({ w: 260, h: 340, r: 340 });

  const pos = (((Math.round(-angle / STEP) % RING) + RING) % RING); // ring position
  const active = pos % SLIDES; // which of the 8 slides is in front

  // size the cylinder to the stage width
  useEffect(() => {
    const el = stage.current;
    if (!el) return undefined;
    const calc = () => {
      const W = el.clientWidth;
      const w = Math.max(150, Math.min(250, W * 0.22));
      const h = Math.round(w * 1.28);
      const r = Math.round((w / 2 / Math.tan(Math.PI / RING)) * 1.08);
      setDims({ w, h, r });
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // autoplay
  useEffect(() => {
    if (hover || reduce) return undefined;
    const t = setInterval(() => setAngle((a) => a - STEP), 3800);
    return () => clearInterval(t);
  }, [hover, reduce]);

  const next = () => setAngle((a) => a - STEP);
  const prev = () => setAngle((a) => a + STEP);

  // jump to the nearest ring position that shows slide `i`
  const goTo = (i) => {
    let best = 0;
    let bestAbs = Infinity;
    for (let j = i; j < RING; j += SLIDES) {
      let d = j - pos;
      if (d > RING / 2) d -= RING;
      if (d < -RING / 2) d += RING;
      if (Math.abs(d) < bestAbs) {
        bestAbs = Math.abs(d);
        best = d;
      }
    }
    setAngle((a) => a - best * STEP);
  };

  const onPointerDown = (e) => {
    drag.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (drag.current == null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    if (dx < -40) next();
    else if (dx > 40) prev();
  };

  return (
    <section
      id="campus-life"
      className="relative overflow-hidden bg-white py-24 dark:bg-[#0F0F13] lg:py-32"
    >
      <SectionBg variants={["dots"]} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
        <span
          data-aos="fade-down"
          className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]"
        >
          Life at Sandip
        </span>
        <SplitHeading
          variant="blur"
          className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          parts={[
            { t: "The classroom is " },
            { t: "only half the campus.", className: "text-[#C8102E]" },
          ]}
        />
      </div>

      {/* ---------- 3D stage ---------- */}
      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        className="relative z-10 mt-12"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          ref={stage}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (drag.current = null)}
          className="relative mx-auto max-w-[1400px] touch-pan-y select-none"
          style={{ height: dims.h + 50, perspective: "1700px" }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(-${dims.r}px) rotateY(${angle}deg)`,
              transition: reduce ? "none" : "transform 1000ms cubic-bezier(.65,0,.35,1)",
            }}
          >
            {ring.map((s, i) => {
              const d = Math.min(Math.abs(i - pos), RING - Math.abs(i - pos));
              return (
                <figure
                  key={`${s.title}-${i}`}
                  className="absolute m-0 overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl shadow-black/30"
                  style={{
                    width: dims.w,
                    height: dims.h,
                    left: -dims.w / 2,
                    top: -dims.h / 2,
                    transform: `rotateY(${i * STEP}deg) translateZ(${dims.r}px)`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    filter: `brightness(${d === 0 ? 1 : d === 1 ? 0.85 : d === 2 ? 0.68 : 0.5})`,
                    transition: "filter 900ms ease",
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <div className="text-lg font-bold leading-tight">{s.title}</div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- caption + controls ---------- */}
      <div className="relative z-10 mx-auto mt-8 max-w-2xl px-6 text-center">
        <div className="min-h-[84px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {lifeSlides[active].title}
              </div>
              <div className="mt-1 text-[16px] text-slate-600 dark:text-slate-300">
                {lifeSlides[active].text}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {lifeSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Show ${s.title}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-[#C8102E]" : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-white/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <Link
          to="/campus-life"
          data-aos="fade-up"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#C8102E]/25 transition hover:bg-[#A00C24]"
        >
          Explore student life
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
