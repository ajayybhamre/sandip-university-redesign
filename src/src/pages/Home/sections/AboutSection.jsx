import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import CountUp from "../../../components/Animated/CountUp";
import { aboutImage, aboutStats } from "../homeData";

const points = [
  "Programmes aligned with Education 4.0 and Industry 4.0",
  "Faculty with qualifications from IITs, NITs and IIMs",
  "Hands-on skills that make graduates industry-ready",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F5] py-24 dark:bg-[#0B0B0D] lg:py-32"
    >
      <SectionBg variants={["dots", "noise"]} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* ---------- image: tilted photo over a pale shape ---------- */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            data-aos="zoom-out-left"
            data-aos-delay="150"
            className="absolute inset-y-8 -right-4 left-10 rotate-3 rounded-[44px] bg-rose-100/90 dark:bg-[#C8102E]/15"
          />
          <div data-aos="fade-right" className="relative">
            <div className="-rotate-2 overflow-hidden rounded-[36px] border-[6px] border-white shadow-2xl shadow-slate-900/20 dark:border-white/10">
              <img
                src={aboutImage}
                alt="Sandip University campus entrance"
                loading="lazy"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
              />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="absolute -bottom-6 -left-2 sm:-left-6"
          >
            <div className="rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-[#15151A]">
              <div className="text-3xl font-extrabold text-[#C8102E]">2017</div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Year of establishment
              </div>
            </div>
          </div>
        </div>

        {/* ---------- text ---------- */}
        <div>
          <span
            data-aos="fade-left"
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#C8102E] dark:border-[#C8102E]/30 dark:bg-[#C8102E]/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
            About Sandip University
          </span>

          <SplitHeading
            variant="rise"
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            parts={[
              { t: "A campus built for " },
              { t: "tomorrow's leaders", className: "text-[#C8102E]" },
            ]}
          />

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Study on a state-of-the-art campus in the lap of nature. Since 2017, Sandip
            University has grown into a hub of education and student development, providing
            industry with talent that combines academic knowledge and hands-on skills.
          </div>

          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <li
                key={p}
                data-aos="fade-left"
                data-aos-delay={250 + i * 100}
                className="flex items-start gap-3 text-[16px] font-medium text-slate-800 dark:text-slate-100"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C8102E]" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-4">
            {aboutStats.map((s, i) => (
              <div
                key={s.label}
                data-aos="zoom-in"
                data-aos-delay={450 + i * 100}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <CountUp
                  to={s.to}
                  suffix={s.suffix}
                  className="block text-2xl font-extrabold text-[#C8102E] sm:text-3xl"
                />
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="700" className="mt-9">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#C8102E]/25 transition hover:bg-[#A00C24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/60"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
