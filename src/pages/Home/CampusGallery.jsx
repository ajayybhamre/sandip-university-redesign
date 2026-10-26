import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import galleryOne from "../../assets/images/gallery1.jpg";
import galleryTwo from "../../assets/images/gallery2.jpg";
import campusOne from "../../assets/images/campus-1.jpg";
import campusTwo from "../../assets/images/campus-2.webp";
import campusAerial from "../../assets/images/campus.png";
import handsOn from "../../assets/images/hands-on-training.jpg";
import innovation from "../../assets/images/innovation-cell.jpg";

// Images already used on the site. Replace the captions if a photo needs a more specific one.
const photos = [
  { src: campusAerial, alt: "Aerial view of the Sandip University campus", caption: "The campus from above", size: "wide" },
  { src: galleryOne, alt: "Students at an event on the Sandip University campus", caption: "Student events" },
  { src: handsOn, alt: "Students in a hands-on training workshop", caption: "Hands-on training" },
  { src: campusOne, alt: "A building on the Sandip University campus", caption: "Campus buildings", size: "tall" },
  { src: innovation, alt: "Sandip University Innovation Cell", caption: "Innovation Cell" },
  { src: galleryTwo, alt: "Student life at Sandip University", caption: "Student life" },
  { src: campusTwo, alt: "Sandip University campus grounds", caption: "Campus grounds" },
];

export default function CampusGallery() {
  const [open, setOpen] = useState(null); // index of the photo in the lightbox
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <section id="campus-gallery" className="hp-section hp-bg-stone" aria-labelledby="gallery-heading">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <div className="hp-head__stack">
            <p className="hp-eyebrow">Campus Life</p>
            <h2 id="gallery-heading" className="hp-h2">A look around <span className="hp-red">the campus.</span></h2>
          </div>
          <p className="hp-lead">Tap any photo to view it larger.</p>
        </header>

        <ul className="hp-gallery" data-stagger>
          {photos.map((p, i) => (
            <li key={p.src} className={p.size ? `is-${p.size}` : undefined}>
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${p.caption}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <span>{p.caption}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hp-gallery__cta" data-reveal>
          <Link to="/campus-life" className="hp-btn hp-btn--primary">
            Explore Campus Life
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to="/gallery" className="hp-btn hp-btn--ghost">View Gallery</Link>
        </div>
      </div>

      {open !== null && (
        <div className="hp-modal" onClick={close}>
          <div
            className="hp-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={photos[open].src} alt={photos[open].alt} />
            <p>{photos[open].caption} · {open + 1} / {photos.length}</p>
            <button type="button" className="hp-modal__close" onClick={close} aria-label="Close photo viewer"><X aria-hidden="true" /></button>
            <button type="button" className="hp-lightbox__nav is-prev" onClick={() => step(-1)} aria-label="Previous photo"><ChevronLeft aria-hidden="true" /></button>
            <button type="button" className="hp-lightbox__nav is-next" onClick={() => step(1)} aria-label="Next photo"><ChevronRight aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </section>
  );
}
