import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wraps every word of a heading so the words can rise into place one by one.
// Returns a function that puts the original markup back.
function splitHeadingWords(heading) {
  const original = heading.innerHTML;
  heading.setAttribute("aria-label", heading.textContent.replace(/\s+/g, " ").trim());

  const wrap = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(" "));
            return;
          }
          const mask = document.createElement("span");
          mask.className = "hp-w";
          mask.setAttribute("aria-hidden", "true");
          const word = document.createElement("span");
          word.className = "hp-wi";
          word.textContent = part;
          mask.appendChild(word);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        wrap(child);
      }
    });
  };
  wrap(heading);

  return () => {
    heading.innerHTML = original;
    heading.removeAttribute("aria-label");
  };
}

/*
  One GSAP context for the whole home page. Sections opt in with data attributes:
    data-hero="line|in|form"  hero intro (runs once on load)
    .hp-h2 headings           words rise into place one by one when scrolled into view
    data-reveal               fades and lifts in when scrolled into view
    data-stagger              its direct children reveal one after another
  Nothing animates for visitors who prefer reduced motion.
*/
export default function useHomeAnimations(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const restore = [];
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero='in']", { y: 16, opacity: 0, duration: 0.7, stagger: 0.12 })
          .from("[data-hero='line']", { yPercent: 105, duration: 1, stagger: 0.12 }, 0.1)
          .from("[data-hero='form']", { y: 32, opacity: 0, duration: 0.9 }, 0.35);

        // Headings: words rise out of a mask.
        gsap.utils.toArray(".hp-h2").forEach((h) => {
          restore.push(splitHeadingWords(h));
          gsap.from(h.querySelectorAll(".hp-wi"), {
            yPercent: 115, duration: 0.9, stagger: 0.06, ease: "power4.out",
            scrollTrigger: { trigger: h, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          // The heading inside a section header animates on its own; fade only the rest.
          const target = el.classList.contains("hp-head")
            ? el.querySelectorAll(":scope > :not(.hp-h2)")
            : el.classList.contains("hp-h2") ? null : el;
          if (!target || target.length === 0) return;
          gsap.from(target, {
            y: 28, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray("[data-stagger]").forEach((el) => {
          gsap.from(el.children, {
            y: 28, opacity: 0, duration: 0.7, stagger: 0.09, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
      }, scope);
      return () => {
        ctx.revert();
        restore.forEach((fn) => fn());
      };
    });

    return () => mm.revert();
  }, [scopeRef]);
}
