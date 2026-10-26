import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Counts from 0 to `to` when scrolled into view.
   <CountUp to={12000} suffix="+" />  ->  12,000+ */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}) {
  const ref = useRef(null);
  const fmt = (n) => Math.round(n).toLocaleString("en-IN");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = `${prefix}${fmt(to)}${suffix}`;
      return undefined;
    }

    const state = { v: 0 };
    el.textContent = `${prefix}0${suffix}`;

    const ctx = gsap.context(() => {
      gsap.to(state, {
        v: to,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${prefix}${fmt(state.v)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${fmt(to)}${suffix}`}
    </span>
  );
}
