import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoDark from "../../../assets/images/logo-dark.png";

const minimalHighlights = [
  { title: "250+ Acres Campus", sub: "Lush green eco-friendly campus" },
  { title: "Modern Infrastructure", sub: "Advanced tech labs & spaces" },
  { title: "Vibrant Student Life", sub: "Clubs, sports & cultural fests" },
];

const YOUTUBE_ID = "-aFFAe45Y5Q";

export default function CampusTour() {
  // The tour plays by itself: muted (browsers require that for autoplay), looping, no controls.
  // Visitors who prefer reduced motion get the still thumbnail instead.
  const [reduce] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <section
      id="campus-tour"
      aria-label="Campus Experience - Step Inside Sandip University"
      className="hp-section hp-bg-paper"
    >
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">CAMPUS EXPERIENCE</p>
          <h2 className="hp-h2">
            Step Inside <span className="hp-red">Sandip University</span>
          </h2>
          <p className="hp-lead">
            Take a closer look at our campus, infrastructure, learning spaces, and vibrant student life in Nashik.
          </p>
        </header>

        <div className="hp-tourvideo" data-reveal>
          {reduce ? (
            <img src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`} alt="Sandip University Campus Tour Video" />
          ) : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`}
              title="Sandip University Campus Tour"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              tabIndex={-1}
            />
          )}
          <span className="hp-tour__badge">
            <img src={logoDark} alt="Sandip Logo" />
            SANDIP UNIV
          </span>
        </div>

        <ul className="hp-tour__facts" data-stagger>
          {minimalHighlights.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="hp-meta">{item.sub}</p>
            </li>
          ))}
        </ul>

        <div className="hp-section__cta" data-reveal>
          <Link to="/about" className="hp-btn hp-btn--primary">
            Explore Campus
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
