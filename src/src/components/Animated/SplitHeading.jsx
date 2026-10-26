import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------
   SplitHeading — GSAP heading reveal.

   <SplitHeading
     as="h2"
     variant="rise"            // rise | chars | blur | left
     trigger="scroll"          // scroll | load
     className="text-4xl font-extrabold"
     parts={[
       { t: "Where ambition meets " },
       { t: "a 250+ acre campus", className: "text-[#C8102E]" },
     ]}
   />

   `parts` lets you colour/style some words. Use { br: true } for a line break.
   Or pass plain `text="..."`.
------------------------------------------------------------------- */

const VARIANTS = {
  // each word slides up out of a mask
  rise: {
    mask: true,
    from: { yPercent: 115, opacity: 0 },
    to: { yPercent: 0, opacity: 1, duration: 0.95, ease: "power4.out" },
    unit: "word",
  },
  // each character flips up out of a mask
  chars: {
    mask: true,
    from: { yPercent: 125, rotate: 9, opacity: 0 },
    to: { yPercent: 0, rotate: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
    unit: "char",
  },
  // words fade up with a soft blur
  blur: {
    mask: false,
    from: { y: 28, opacity: 0, filter: "blur(10px)" },
    to: { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
    unit: "word",
  },
  // words slide in from the left
  left: {
    mask: false,
    from: { x: -60, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
    unit: "word",
  },
};

export default function SplitHeading({
  as: Tag = "h2",
  parts,
  text,
  className = "",
  variant = "rise",
  trigger = "scroll",
  delay = 0,
  stagger,
  start = "top 88%",
}) {
  const ref = useRef(null);
  const cfg = VARIANTS[variant] || VARIANTS.rise;
  const segments = parts || [{ t: text || "" }];
  const label = segments.map((s) => (s.br ? " " : s.t)).join("");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const ctx = gsap.context(() => {
      const units = el.querySelectorAll("[data-split]");
      if (!units.length) return;

      gsap.set(units, cfg.from);

      const vars = {
        ...cfg.to,
        delay,
        stagger: stagger ?? (cfg.unit === "char" ? 0.03 : 0.07),
      };

      if (trigger === "scroll") {
        vars.scrollTrigger = { trigger: el, start, once: true };
      }
      gsap.to(units, vars);
    }, el);

    return () => ctx.revert();
  }, [variant, trigger, label, delay, stagger, start, cfg]);

  const renderWord = (word, key, extra) => {
    const inner =
      cfg.unit === "char"
        ? word.split("").map((ch, i) => (
            <span key={i} data-split className={`inline-block will-change-transform ${extra || ""}`}>
              {ch}
            </span>
          ))
        : (
            <span data-split className={`inline-block will-change-transform ${extra || ""}`}>
              {word}
            </span>
          );

    if (cfg.mask) {
      // padding keeps descenders (g, y, p) from being clipped by the mask
      return (
        <span key={key} className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
          {inner}
        </span>
      );
    }
    return (
      <span key={key} className="inline-block">
        {inner}
      </span>
    );
  };

  return (
    <Tag ref={ref} aria-label={label} className={className}>
      <span aria-hidden="true">
        {segments.map((seg, si) => {
          if (seg.br) return <br key={`br-${si}`} />;
          return seg.t.split(/(\s+)/).map((tok, ti) => {
            if (tok === "") return null;
            if (/^\s+$/.test(tok)) return <span key={`${si}-${ti}`}> </span>;
            return renderWord(tok, `${si}-${ti}`, seg.className);
          });
        })}
      </span>
    </Tag>
  );
}
