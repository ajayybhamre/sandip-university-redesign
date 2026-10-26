import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { features } from "../homeData";
import { ICONS } from "./iconMap";

const TONES = [
  "bg-gradient-to-br from-[#C8102E] to-[#7A0A1E]",
  "bg-gradient-to-br from-[#123B61] to-[#0B192C]",
  "bg-gradient-to-br from-[#D4AF37] to-[#A9831B]",
];

export default function WhySection() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-20 dark:bg-[#0F0F13] lg:py-28"
    >
      <SectionBg variants={["grid"]} />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12">
        {/* ---------- curved gradient panel ---------- */}
        <div data-aos="fade-right" className="lg:col-span-5">
          <div className="relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-[36px] bg-gradient-to-br from-[#C8102E] via-[#9F0D24] to-[#3F0510] p-10 text-white shadow-2xl shadow-[#C8102E]/20 lg:h-full lg:rounded-r-[220px] lg:p-14 lg:pr-24">
            <SectionBg variants={["rings"]} tone="dark" glow={false} />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3 text-white/80">
                <span className="h-px w-14 bg-white/70" />
                <ArrowRight className="h-5 w-5" />
              </div>

              <SplitHeading
                variant="chars"
                className="text-5xl leading-[1.02] tracking-tight sm:text-6xl"
                parts={[
                  { t: "WHY", className: "font-extrabold" },
                  { br: true },
                  { t: "CHOOSE US", className: "font-light" },
                ]}
              />

              <div className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/85">
                Six reasons thousands of students choose Sandip University to start their careers.
              </div>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#C8102E] shadow-lg transition hover:bg-rose-50 bg-white-keep focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Discover more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- feature list ---------- */}
        <div className="flex flex-col justify-center gap-7 lg:col-span-7 lg:pl-20">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                data-aos="fade-left"
                data-aos-delay={i * 90}
                className="group flex items-center gap-5"
              >
                <div
                  className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-white shadow-lg ring-8 ring-slate-100 transition duration-500 group-hover:scale-110 group-hover:rotate-6 dark:ring-white/5 ${
                    TONES[i % TONES.length]
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <span className="hidden h-px w-10 shrink-0 bg-gradient-to-r from-[#C8102E]/60 to-transparent sm:block" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
                  <div className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {f.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
