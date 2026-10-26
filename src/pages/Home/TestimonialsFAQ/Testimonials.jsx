import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import videos from "./testimonialVideos";

const loop = [...videos, ...videos]; // doubled so the marquee never ends

export default function Testimonials() {
  const [playing, setPlaying] = useState(null); // video object in the viewer

  useEffect(() => {
    if (!playing) return;
    const onKey = (e) => e.key === "Escape" && setPlaying(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [playing]);

  return (
    <section id="testimonials" className="hp-section hp-bg-stone" aria-labelledby="testimonials-heading">
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">Testimonials</p>
          <h2 id="testimonials-heading" className="hp-h2">
            Student Journey <span className="hp-red">at Sandip University</span>
          </h2>
          <p className="hp-lead">
            Discover how our students transformed their careers through
            quality education, practical learning, and industry exposure.
          </p>
        </header>
      </div>

      <div className="hp-marquee" data-reveal>
        <ul className="hp-marquee__track" style={{ "--dur": "80s" }} aria-label="Student video testimonials">
          {loop.map((v, i) => {
            const dup = i >= videos.length;
            return (
              <li key={`${v.id}-${i}`} className="hp-vcard" aria-hidden={dup ? "true" : undefined} inert={dup ? true : undefined}>
                <button type="button" onClick={() => setPlaying(v)} aria-label={`Play video: ${v.name}, ${v.program}`}>
                  <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
                  <span className="hp-vcard__play"><Play aria-hidden="true" /></span>
                </button>
                <p className="hp-vcard__name">{v.name}</p>
                <p className="hp-meta">{v.program}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hp-wrap hp-slider__foot">
        <a href="https://www.sandipuniversity.edu.in/placements/testimonials-stud.php" target="_blank" rel="noopener noreferrer" className="hp-link">
          See All Testimonials
        </a>
      </div>

      {playing && (
        <div className="hp-modal" role="dialog" aria-modal="true" aria-label={`${playing.name} testimonial video`} onClick={() => setPlaying(null)}>
          <div className="hp-modal__box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="hp-modal__close" onClick={() => setPlaying(null)} aria-label="Close video player">
              <X aria-hidden="true" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playing.id}?autoplay=1&rel=0`}
              title={`${playing.name}: Student Journey at Sandip University`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
