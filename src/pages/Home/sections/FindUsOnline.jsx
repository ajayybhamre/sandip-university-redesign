import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BookOpen, Compass, Globe, Maximize2, Users, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import CountUp from "../../../components/Animated/CountUp";
import { campusMapImage, mapPins, socialLinks, socialStats } from "../homeData";

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebookF,
  x: FaTwitter,
  website: Globe,
  blogs: BookOpen,
};

const STAT_ICONS = [Users, Heart, Globe];

export default function FindUsOnline() {
  const section = useRef(null);
  const [active, setActive] = useState(0);
  const pin = mapPins[active];

  /* pins drop onto the map one by one when it scrolls into view */
  useLayoutEffect(() => {
    const el = section.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from("[data-pin]", {
        y: -60,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2.2)",
        stagger: 0.18,
        scrollTrigger: { trigger: "[data-map]", start: "top 72%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="find-us"
      className="relative overflow-hidden bg-[#F4F1EC] py-24 dark:bg-[#0B0B0D] lg:py-32"
    >
      <SectionBg variants={["grid", "rings", "noise"]} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ---------- heading ---------- */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span
              data-aos="fade-right"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#C8102E]"
            >
              <Compass className="h-4 w-4" /> Connect &amp; visit
            </span>
            <SplitHeading
              variant="chars"
              className="mt-3 text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
              parts={[
                { t: "Find us online." },
                { br: true },
                { t: "Find your way ", className: "text-slate-400 dark:text-slate-500" },
                { t: "around campus.", className: "text-[#C8102E]" },
              ]}
            />
          </div>
          <div
            data-aos="fade-left"
            className="max-w-md text-[17px] leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Follow Sandip University on your favourite platform, then tap the pins on the map to see
            the labs, library, incubation cell and sports complex before you visit.
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* ---------- left: social cards + stats ---------- */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
              {socialLinks.map((s, i) => {
                const Icon = ICONS[s.id];
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={i * 80}
                    className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C8102E]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] dark:border-white/10 dark:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${s.tone} transition-transform duration-500 group-hover:scale-x-100`}
                    />
                    <div className="flex items-start justify-between">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${s.tone}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8102E]" />
                    </div>
                    <div className="mt-4 text-[17px] font-bold text-slate-900 dark:text-white">
                      {s.name}
                    </div>
                    <div className="text-[14px] text-slate-600 dark:text-slate-300">{s.line}</div>
                    <div className="mt-1 truncate text-[13px] font-medium text-slate-400 dark:text-slate-500">
                      {s.handle}
                    </div>
                  </a>
                );
              })}
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="mt-5 grid grid-cols-3 overflow-hidden rounded-2xl bg-[#0B192C] text-white shadow-xl shadow-[#0B192C]/20 bg-white-keep"
            >
              {socialStats.map((s, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div key={s.label} className={`p-5 ${i > 0 ? "border-l border-white/10" : ""}`}>
                    <Icon className="h-4 w-4 text-[#FF5A70]" />
                    <CountUp
                      to={s.to}
                      suffix={s.suffix}
                      className="mt-2 block text-2xl font-extrabold sm:text-3xl"
                    />
                    <div className="text-xs uppercase tracking-wider text-white/60">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- right: interactive campus map ---------- */}
          <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-7">
            <div
              data-map
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-2xl shadow-slate-900/15 dark:border-white/10 dark:bg-[#15151A]"
            >
              <div className="relative aspect-[1859/846] overflow-hidden bg-slate-800">
                <img
                  src={campusMapImage}
                  alt="Aerial view of the Sandip University campus"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/20" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Compass className="h-3.5 w-3.5 text-[#FF5A70]" />
                  250+ acre campus map
                </span>
                <Link
                  to="/about"
                  className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-900 shadow-lg transition hover:bg-rose-50 bg-white-keep"
                >
                  Open full map <Maximize2 className="h-3.5 w-3.5" />
                </Link>

                {mapPins.map((p, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      data-pin
                      aria-label={`Show ${p.tab} on the map`}
                      aria-pressed={on}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                      style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    >
                      <span className="relative grid place-items-center">
                        {on && (
                          <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#C8102E]/50" />
                        )}
                        <span
                          className={`relative grid h-10 w-10 place-items-center rounded-full border-2 border-white shadow-xl transition duration-300 focus-visible:ring-2 focus-visible:ring-white ${
                            on ? "scale-125 bg-[#C8102E]" : "bg-[#0B192C] hover:scale-110"
                          }`}
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                        {on && (
                          <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-slate-900 shadow bg-white-keep">
                            {p.tab}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* info card for the selected pin */}
              <div className="p-5 sm:p-6" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pin.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center"
                  >
                    <img
                      src={pin.image}
                      alt=""
                      loading="lazy"
                      className="h-24 w-full rounded-2xl object-cover sm:w-32"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#C8102E]">{pin.kind}</div>
                      <div className="text-xl font-extrabold leading-snug text-slate-900 dark:text-white">
                        {pin.title}
                      </div>
                      <div className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {pin.text}
                      </div>
                    </div>
                    <Link
                      to={pin.to}
                      aria-label={`Learn more about ${pin.title}`}
                      className="group grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#C8102E] text-white transition hover:bg-[#A00C24]"
                    >
                      <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-white/10">
                  {mapPins.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
                        i === active
                          ? "bg-[#C8102E] text-white shadow-md shadow-[#C8102E]/30"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20"
                      }`}
                    >
                      {p.tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
