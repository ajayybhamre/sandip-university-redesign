import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import SplitHeading from "../../../components/Animated/SplitHeading";
import HeroEnquiryForm from "./HeroEnquiryForm";
import { heroVideos } from "../homeData";

/* One video (or its poster image if the video cannot play). */
function VideoSlide({ item, slideIndex, paused, staticMode, onDone }) {
  const ref = useRef(null);
  const [fallback, setFallback] = useState(staticMode);

  // play / pause
  useEffect(() => {
    const v = ref.current;
    if (!v || fallback) return;
    v.muted = true;
    if (paused) {
      v.pause();
    } else {
      const p = v.play();
      if (p && p.catch) p.catch(() => setFallback(true));
    }
  }, [paused, fallback]);

  // safety timer: move on after maxSeconds (or 7 s when only the poster shows)
  useEffect(() => {
    if (paused || staticMode) return undefined;
    const seconds = fallback ? 7 : item.maxSeconds ?? 15;
    const t = setTimeout(() => onDone(slideIndex), seconds * 1000);
    return () => clearTimeout(t);
  }, [paused, fallback, staticMode, item, slideIndex, onDone]);

  return (
    <div className="absolute inset-0">
      {fallback ? (
        <img src={item.poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={() => onDone(slideIndex)}
          onError={() => setFallback(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // only advance if the slide that asked is still the current one
  const advance = useCallback(
    (from) => setIndex((i) => (i === from ? (i + 1) % heroVideos.length : i)),
    []
  );

  return (
    <section
      aria-label="Welcome to Sandip University"
      className="relative overflow-hidden rounded-b-[32px] bg-[#0B192C] text-white lg:rounded-b-[56px]"
    >
      {/* ---------- two videos sliding one after another ---------- */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <VideoSlide
              item={heroVideos[index]}
              slideIndex={index}
              paused={paused}
              staticMode={!!reduce}
              onDone={advance}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/90 via-[#0B192C]/50 to-[#0B192C]/20" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B192C]/80 to-transparent" />

      {/* ---------- content ---------- */}
      <div className="relative z-10 mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-6 pb-40 pt-40 sm:px-8 lg:min-h-screen lg:grid-cols-12 lg:px-12 lg:pb-44 lg:pt-40">
        <div className="lg:col-span-7">
          <span
            data-aos="fade-down"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Admissions open for 2026-27
          </span>

          <SplitHeading
            as="h1"
            variant="chars"
            trigger="load"
            delay={0.25}
            className="mt-6 text-[52px] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[96px]"
            parts={[{ t: "Sandip" }, { br: true }, { t: "University" }]}
          />

          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-5 text-xl font-medium text-white/90 sm:text-2xl"
          >
            Nashik. <span className="text-rose-200">Simply world class.</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="850" className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/apply"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3.5 text-base font-bold shadow-xl shadow-black/30 transition hover:bg-[#A00C24] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-bold backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* which video is playing */}
          <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Hero videos">
            {heroVideos.map((v, i) => (
              <button
                key={v.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show video ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === index ? "w-12 bg-[#C8102E]" : "w-6 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- transparent enquiry form ---------- */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="w-full max-w-md justify-self-start lg:col-span-5 lg:justify-self-end"
        >
          <HeroEnquiryForm />
        </div>
      </div>

      {/* pause / play */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play background video" : "Pause background video"}
        className="absolute bottom-28 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-md transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:bottom-32 lg:right-8"
      >
        {paused ? <Play className="h-4 w-4 fill-white" /> : <Pause className="h-4 w-4 fill-white" />}
      </button>
    </section>
  );
}
