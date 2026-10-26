import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Same figures as the existing CounterSection.
const stats = [
  { target: 250, suffix: "+", title: "Acres Campus" },
  { target: 10000, suffix: "+", title: "Alumni Students", comma: true },
  { target: 4, suffix: "th", title: "Top Ranking University" },
  { raw: "IIT/NITs", title: "Experienced Faculties" },
  { target: 100, suffix: "%", title: "Placement Assistance" },
  { target: 120, suffix: "+", title: "Patents Filed" },
];

const format = (n, comma) => (comma ? Math.round(n).toLocaleString() : String(Math.round(n)));

export default function GlanceStats() {
  const ref = useRef(null);

  // Count the numbers up once when the band scrolls into view (skipped for reduced motion).
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const nodes = el.querySelectorAll("[data-count]");
      nodes.forEach((node) => {
        const target = Number(node.dataset.count);
        const comma = node.dataset.comma === "1";
        const suffix = node.dataset.suffix || "";
        const obj = { v: 0 };
        node.textContent = format(0, comma) + suffix;
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              v: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => { node.textContent = format(obj.v, comma) + suffix; },
            }),
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <ul className="hp-glance" ref={ref} aria-label="Sandip University at a glance" data-stagger>
          {stats.map((s) => (
            <li key={s.title} className="hp-glance__item">
              <span
                className="hp-num hp-glance__num"
                {...(s.raw
                  ? {}
                  : { "data-count": s.target, "data-suffix": s.suffix, "data-comma": s.comma ? "1" : "0" })}
              >
                {s.raw ? s.raw : format(s.target, s.comma) + s.suffix}
              </span>
              <span className="hp-glance__label">{s.title}</span>
            </li>
          ))}
    </ul>
  );
}
