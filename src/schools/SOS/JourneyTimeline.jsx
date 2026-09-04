import { useEffect, useRef, useState } from "react";
import journeyData from "./data/journeyData.js";

/*
  Copied as-is from SOET/JourneyTimeline.jsx — self-contained, reads its own
  ./data/journeyData.js, renders its own section + container so it aligns
  correctly even mounted bare, e.g. <JourneyTimeline slug="SCHOOL_SLUG" />.
*/
export function JourneyTimeline({ slug }) {
  const JOURNEY = journeyData[slug] || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [slug, JOURNEY.length]);

  if (JOURNEY.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--surface)] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">
            The Path
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-[var(--ink)] md:text-5xl">
            Your years, mapped out.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--ink-muted)]">
            Scroll to see how the programme builds, year by year.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          <div className="space-y-10 lg:space-y-16 lg:py-24">
            {JOURNEY.map((step, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[i] = el)}
                  data-index={i}
                  className="transition-opacity duration-500"
                >
                  <div className="mb-5 overflow-hidden rounded-2xl lg:hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-56 w-full object-cover"
                    />
                  </div>

                  <p
                    className={`font-[var(--font-display)] text-2xl font-bold leading-[1.35] transition-colors duration-500 sm:text-3xl ${
                      isActive
                        ? "text-[var(--ink)]"
                        : "text-[var(--ink)] opacity-[0.16]"
                    }`}
                  >
                    <span
                      className={`mr-2 align-super text-xs font-bold transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--brand-red-600)]"
                          : "text-[var(--ink-muted)] opacity-60"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        isActive ? "text-[var(--brand-red-600)]" : undefined
                      }
                    >
                      {step.title}
                    </span>{" "}
                    <span className="font-normal text-[var(--ink-muted)]">
                      {step.text}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-24 h-[70vh] overflow-hidden rounded-3xl bg-[var(--surface-raised)]">
              {JOURNEY.map((step, i) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                  {JOURNEY[activeIndex].year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
