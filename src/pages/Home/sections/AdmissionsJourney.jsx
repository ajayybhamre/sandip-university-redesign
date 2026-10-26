import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import CountUp from "../../../components/Animated/CountUp";
import { admissionStats, journey, streams } from "../homeData";
import { ICONS } from "./iconMap";

gsap.registerPlugin(ScrollTrigger);

export default function AdmissionsJourney() {
  const listRef = useRef(null);
  const lineRef = useRef(null);

  // the red line draws itself as the section scrolls past
  useLayoutEffect(() => {
    const line = lineRef.current;
    const list = listRef.current;
    if (!line || !list) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(line, { scaleY: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list, start: "top 70%", end: "bottom 60%", scrub: 0.6 },
        }
      );
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#0B192C] py-24 text-white lg:py-32"
    >
      <SectionBg variants={["grid", "rings", "noise"]} tone="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* ---------- left: pitch ---------- */}
          <div className="lg:col-span-5">
            <span
              data-aos="fade-right"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Admissions open for 2026-27
            </span>

            <SplitHeading
              variant="rise"
              className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
              parts={[
                { t: "Four steps to your " },
                { t: "first day on campus.", className: "text-[#FF5A70]" },
              ]}
            />

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-6 max-w-md text-[17px] leading-relaxed text-white/80"
            >
              Admissions at Sandip University are simple and guided. Follow the path, or pick a
              stream to see programs first.
            </div>

            <div data-aos="fade-up" data-aos-delay="250" className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3.5 font-bold shadow-xl shadow-black/30 transition hover:bg-[#A00C24]"
              >
                Apply now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold backdrop-blur transition hover:bg-white/20"
              >
                Explore programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="350" className="mt-10">
              <div className="text-sm font-semibold text-white/60">
                Not sure where to start? Browse by stream
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {streams.map((s) => (
                  <Link
                    key={s}
                    to="/programs"
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium transition hover:border-[#FF5A70] hover:bg-[#C8102E]"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- right: steps with a drawing line ---------- */}
          <div className="lg:col-span-7">
            <ol ref={listRef} className="relative space-y-6">
              <span className="absolute bottom-7 left-[27px] top-7 w-px bg-white/15" />
              <span
                ref={lineRef}
                className="absolute bottom-7 left-[27px] top-7 w-px origin-top bg-gradient-to-b from-[#FF5A70] to-[#C8102E]"
              />

              {journey.map((step, i) => {
                const Icon = ICONS[step.icon];
                return (
                  <li
                    key={step.title}
                    data-aos="fade-left"
                    data-aos-delay={i * 130}
                    className="relative flex gap-5"
                  >
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#C8102E] shadow-lg shadow-[#C8102E]/40 ring-4 ring-[#0B192C]">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-extrabold text-[#0B192C] bg-white-keep">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <div className="mt-1 text-[15px] leading-relaxed text-white/75">
                        {step.text}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* ---------- numbers ---------- */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {admissionStats.map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in-up"
              data-aos-delay={i * 120}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="block text-4xl font-extrabold text-white"
              />
              <div className="mt-1 text-base font-semibold">{s.label}</div>
              <div className="text-sm text-white/60">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
