import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import { nonTechRecruiters, techRecruiters } from "../Recruiters/recruiterGroups";

/* One slider. `direction` = "left" | "right". The list is repeated until a single set is
   wider than a big screen, then rendered twice so the loop is seamless. */
function Row({ items, direction }) {
  if (!items.length) return null;

  const reps = Math.max(1, Math.ceil(10 / items.length));
  const set = Array.from({ length: reps }, () => items).flat();
  const doubled = [...set, ...set];
  const anim = direction === "left" ? "sun-marquee-left" : "sun-marquee-right";

  return (
    <div>
      <div className="group relative overflow-hidden py-2">
        <div
          className="flex w-max gap-5 will-change-transform group-hover:[animation-play-state:paused]"
          style={{ animation: `${anim} ${set.length * 3.5}s linear infinite` }}
        >
          {doubled.map((c, i) => (
            <div
              key={i}
              className="grid h-28 w-52 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white-keep sm:h-32 sm:w-60"
              title={c.name}
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-center text-xl font-extrabold leading-tight text-[#0B192C]">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RecruitersMarquee() {
  return (
    <section
      id="recruiters"
      aria-label="Our recruiters"
      className="relative overflow-hidden bg-[#0B192C] py-24 text-white lg:py-28"
    >
      <SectionBg variants={["grid", "noise"]} tone="dark" />

      <style>{`
        @keyframes sun-marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes sun-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          [style*="sun-marquee"] { animation: none !important; }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SplitHeading
            variant="left"
            className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl"
            parts={[
              { t: "Our students work with " },
              { t: "industry leaders.", className: "text-[#FF5A70]" },
            ]}
          />
          <div data-aos="fade-left" className="max-w-sm text-[17px] leading-relaxed text-white/75">
            Leading national and global companies recruit Sandip University graduates every year.
          </div>
        </div>
      </div>

      {/* two sliders: tech moves left, non-tech moves right */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="relative z-10 mt-12 space-y-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      >
        <Row items={techRecruiters} direction="left" />
        <Row items={nonTechRecruiters} direction="right" />
      </div>
    </section>
  );
}
