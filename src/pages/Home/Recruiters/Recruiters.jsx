import { motion } from "framer-motion";
import recruiters from "./recruiterData";

// Repeat the list so each half of a track is always wider than the screen
const MIN_PER_HALF = 12;
const reps = Math.max(1, Math.ceil(MIN_PER_HALF / Math.max(recruiters.length, 1)));
const half = Array.from({ length: reps }).flatMap(() => recruiters);
const rowA = [...half, ...half];
const reversed = [...half].reverse();
const rowB = [...reversed, ...reversed];

function LogoRow({ items, reverse = false, duration = 45 }) {
  return (
    <div className="sun-rec-wrap relative overflow-x-hidden">
      <div
        className="sun-rec-track flex w-max"
        style={{
          animation: `sun-rec-scroll ${duration}s linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
        }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            aria-hidden={i >= items.length / 2 ? "true" : undefined}
            className="
              group
              w-44 sm:w-52
              h-24 sm:h-28
              mx-2.5
              shrink-0
              rounded-2xl
              shadow-lg
              shadow-black/30
              flex
              items-center
              justify-center
              p-5
              transition-transform
              duration-300
              hover:-translate-y-1.5
              hover:shadow-2xl
              hover:shadow-[#C8102E]/25
            "
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={logo}
              alt={
                i < items.length / 2
                  ? "Recruiting partner logo"
                  : ""
              }
              loading="lazy"
              className="
                h-10
                sm:h-12
                max-w-full
                object-contain
                opacity-100
                transition-all
                duration-300
                group-hover:scale-105
              "
              style={{
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Recruiters() {
  return (
    <section
      id="recruiters"
      aria-labelledby="recruiters-heading"
      className="relative py-20 lg:py-28 bg-[#0B192C] text-white overflow-hidden"
    >
      <style>{`
        @keyframes sun-rec-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sun-rec-wrap:hover .sun-rec-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sun-rec-track { animation: none !important; }
          .sun-rec-wrap { overflow-x: auto; }
        }
      `}</style>

      {/* ---------- BACKGROUND ---------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 75%)",
        }}
      />
      <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-[#C8102E]/30 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-amber-400/15 blur-[130px] pointer-events-none" />

      {/* ---------- HEADING ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-6 items-end mb-14"
        >
          <h2
            id="recruiters-heading"
            className="lg:col-span-8 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08]"
          >
            Our students work with
            <span className="block font-serif italic font-normal text-[#FF5A70]">
              industry leaders.
            </span>
          </h2>
          <p className="lg:col-span-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Leading national and global companies recruit Sandip University
            graduates every year.
          </p>
        </motion.div>
      </div>

      {/* ---------- COUNTER-SCROLLING SLIDER ---------- */}
      <div className="relative z-10 space-y-5">
        <div className="absolute left-0 top-0 h-full w-24 sm:w-56 z-20 bg-gradient-to-r from-[#0B192C] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 sm:w-56 z-20 bg-gradient-to-l from-[#0B192C] to-transparent pointer-events-none" />
        <LogoRow items={rowA} duration={50} />
        <LogoRow items={rowB} reverse duration={58} />
      </div>
    </section>
  );
}