import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { schools } from "../homeData";

export default function SchoolsSection() {
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section
      id="schools"
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
              Explore our schools
            </span>
            <SplitHeading
              variant="rise"
              className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
              parts={[
                { t: "Seven schools. " },
                { br: true },
                { t: "One place to grow.", className: "text-[#C8102E]" },
              ]}
            />
          </div>

          <div data-aos="fade-left" className="flex gap-3">
            {[
              { label: "Scroll schools left", dir: -1, Icon: ChevronLeft },
              { label: "Scroll schools right", dir: 1, Icon: ChevronRight },
            ].map(({ label, dir, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => scroll(dir)}
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- tilted card strip ---------- */}
        <div
          ref={rail}
          className="mt-6 flex snap-x snap-mandatory gap-7 overflow-x-auto pb-16 pt-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ paddingInline: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))" }}
        >
          {schools.map((s, i) => (
            <div
              key={s.code}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 90, 450)}
              className="shrink-0 snap-center"
            >
              <Link
                to={s.path}
                className={`group relative block h-[390px] w-[270px] overflow-hidden rounded-[30px] text-white shadow-xl shadow-slate-900/25 transition duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] sm:h-[430px] sm:w-[300px] ${
                  i % 2 === 0 ? "-rotate-3" : "rotate-2 translate-y-6"
                }`}
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/45 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-widest backdrop-blur-md">
                  {s.code}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-rose-200">
                      School of
                    </div>
                    <div className="mt-1 text-xl font-extrabold leading-tight">{s.name}</div>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#C8102E] transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#C8102E]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
