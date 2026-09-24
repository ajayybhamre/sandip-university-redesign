import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Users,
  Award,
  Trophy,
  Rocket,
  ArrowRight,
  Sparkles,
  Pause,
} from "lucide-react";
import campusMainImg from "../assets/images/campus-3.png";
import galleryImg from "../assets/images/gallery1.jpg";
import handsOnImg from "../assets/images/hands-on-training.jpg";

const AUTO_MS = 6000;

const pillars = [
  {
    icon: Users,
    title: "SUN Clubs & Societies",
    desc: "20+ student-led clubs in robotics, coding, drama, photography, and cultural arts.",
    image: galleryImg,
    alt: "Students at a cultural event on campus",
    caption: "Cultural Fests",
    stat: "50+",
    statLabel: "active clubs",
  },
  {
    icon: Rocket,
    title: "Workshops & Hackathons",
    desc: "Hands-on tech bootcamps, industry guest lectures, and live hackathons.",
    image: handsOnImg,
    alt: "Students in a hands-on training workshop",
    caption: "Tech Labs",
    stat: "24h",
    statLabel: "build-a-thon format",
  },
  {
    icon: Trophy,
    title: "Sports Competitions",
    desc: "Olympic-grade sports complexes, annual inter-collegiate tournaments, and athletics.",
    image: campusMainImg,
    alt: "Sandip University sports and campus grounds",
    caption: "Sports Complex",
    stat: "250+",
    statLabel: "acre eco-campus",
  },
  {
    icon: Award,
    title: "Student Development",
    desc: "Leadership summits, soft skills training, and community welfare programs.",
    image: galleryImg,
    alt: "Students at a leadership summit",
    caption: "Leadership Summits",
    stat: "100%",
    statLabel: "student participation",
  },
];

const ticker = [
  "Robotics Club",
  "Drama Society",
  "Photography",
  "Coding Circle",
  "SUN Fest",
  "Inter-collegiate Cup",
  "Hackathons",
  "Guest Lectures",
  "Cultural Arts",
  "Community Welfare",
];

export default function StudentLifeSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const current = pillars[active];

  // Auto-advance through the four pillars; pauses on hover/focus or reduced motion
  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % pillars.length),
      AUTO_MS
    );
    return () => clearTimeout(id);
  }, [active, paused, reduce]);

  return (
    <section
      id="student-life"
      aria-label="Student Life - More Than a University"
      className="relative overflow-hidden bg-[#14060A] text-white py-20 lg:py-28"
    >
      <style>{`
        @keyframes sun-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sun-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) {
          .sun-marquee-track, .sun-progress-bar { animation: none !important; }
        }
      `}</style>

      {/* ---------- BACKGROUND LAYERS ---------- */}
      <img
        src={campusMainImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#14060A] via-[#14060A]/85 to-[#3A0712]/90" />
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)",
        }}
      />
      {/* Red glow behind the image */}
      <div className="absolute -right-24 top-10 w-[520px] h-[520px] rounded-full bg-[#C8102E]/30 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16"
        >
          <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02]">
            The classroom is
            <br />
            <span className="font-serif italic font-normal text-[#FF5A70]">
              only half the campus.
            </span>
          </h2>
          <p className="lg:col-span-5 text-sm sm:text-[15px] text-white/70 leading-relaxed max-w-md lg:ml-auto">
            At Sandip University, learning continues in clubs, labs, hackathons,
            and on the sports field. Pick a pillar below to see what a week
            outside the lecture hall looks like.
          </p>
        </motion.div>

        {/* ---------- INTERACTIVE SHOWCASE ---------- */}
        <div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Left: pillar selector */}
          <div
            role="tablist"
            aria-label="Student life pillars"
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon;
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`relative text-left rounded-2xl border px-5 py-4 transition-colors duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A70] ${
                    isActive
                      ? "bg-white/[0.08] border-[#C8102E]/70"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-[#C8102E] text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span
                      className={`font-bold text-[15px] lg:text-base tracking-tight ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[13px] text-white/65 leading-relaxed pl-[52px] pt-2 overflow-hidden"
                      >
                        {p.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Auto-advance progress line */}
                  {isActive && !reduce && (
                    <span
                      key={`${active}-${paused}`}
                      className="sun-progress-bar absolute left-0 bottom-0 h-[3px] w-full origin-left bg-[#FF5A70]"
                      style={{
                        animation: paused
                          ? "none"
                          : `sun-progress ${AUTO_MS}ms linear forwards`,
                        transform: paused ? "scaleX(1)" : undefined,
                        opacity: paused ? 0.35 : 1,
                      }}
                    />
                  )}
                </button>
              );
            })}

            <div className="flex items-center gap-4 pt-3">
              <a
                href="/campus-life"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-sm shadow-lg shadow-[#C8102E]/30 hover:bg-[#E0163A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Student Life
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              {paused && !reduce && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/50">
                  <Pause className="w-3 h-3" /> Paused
                </span>
              )}
            </div>
          </div>

          {/* Right: rotating image stage */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-3 rounded-[36px] border border-dashed border-white/15 pointer-events-none" />

            <div className="relative h-[340px] sm:h-[460px] lg:h-full lg:min-h-[480px] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl shadow-black/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image + active}
                  src={current.image}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#14060A]/90 via-[#14060A]/10 to-transparent pointer-events-none" />

              {/* Caption chip */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5A70]" />
                {current.caption}
              </div>

              {/* Big stat */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4"
                >
                  <div>
                    <p className="text-5xl sm:text-6xl font-black leading-none tracking-tight">
                      {current.stat}
                    </p>
                    <p className="text-sm text-white/75 mt-1.5">
                      {current.statLabel}
                    </p>
                  </div>
                  <span className="hidden sm:block text-xs text-white/60 font-medium">
                    {active + 1} of {pillars.length}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MARQUEE STRIP ---------- */}
      <div
        className="relative z-10 mt-16 lg:mt-24 border-y border-white/10 bg-white/[0.03] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="sun-marquee-track flex w-max gap-10 py-4"
          style={{ animation: "sun-marquee 40s linear infinite" }}
        >
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-lg sm:text-xl font-serif italic text-white/55 whitespace-nowrap"
            >
              {t}
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}