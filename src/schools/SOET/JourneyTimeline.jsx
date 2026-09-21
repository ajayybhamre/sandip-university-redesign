import { useEffect, useRef, useState } from "react";
import journeyData from "./data/journeyData.js";

/*
  This is SELF-CONTAINED: it renders its own <section> + the same
  "mx-auto max-w-7xl px-6 lg:px-8" container every other section on the
  page uses (AboutSOET.jsx, WhySOET.jsx, etc.), so it aligns correctly
  even when mounted bare — e.g. <JourneyTimeline slug="soet" /> with no
  wrapper, which is how it's used in SOET.jsx.

  Colors/fonts read directly from your real tokens in index.css
  (--brand-navy, --brand-red-600, --brand-red-50, --ink, --ink-muted,
  --line, --surface, --surface-raised, --font-display). Nothing here
  declares or overrides those globally.

  Pattern: a single flowing column of copy on the left. As you scroll,
  whichever step sits in the center band of the viewport lights up
  (bold, full-contrast, colored lead-in) while the rest recede to a
  faint wash — and the image pinned on the right crossfades to match.
  On small screens the sticky column is dropped and each step carries
  its own inline image instead.

  DATA: all copy + images live in ./data/journeyData.js, keyed by school
  slug. Pass the school's slug in as a prop and the right array + images
  are picked up automatically — swapping slug re-runs the whole thing
  cleanly (steps re-render, active step resets, scroll observer re-attaches).
*/
export function JourneyTimeline({ slug = "soet" }) {
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
    // Re-attach whenever the journey data itself changes (new slug -> new steps)
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
            Your four years, mapped out.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--ink-muted)]">
            Scroll to see how the programme builds, year by year.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          {/* Left: one continuous flow of copy. Past/future steps fade out;
              the step nearest the center of the viewport comes forward. */}
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
                  {/* Mobile-only inline image — the sticky panel takes over at lg */}
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

          {/* Right: sticky image panel, desktop only. All images are stacked
              and crossfade based on which step is active. */}
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

              {/* Year label overlay, tracks the active step */}
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