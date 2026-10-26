import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import handsOnImage from "../../assets/images/hands-on-training.jpg";
import researchImage from "../../assets/images/research-grants.jpg";
import campus2Image from "../../assets/images/campus-2.webp";

// Three images and three short points, all taken from the earlier Why Sandip content.
const slides = [
  { image: handsOnImage, alt: "Hands-on industrial skill training at Sandip University" },
  { image: researchImage, alt: "Research grants and innovation projects at Sandip University" },
  { image: campus2Image, alt: "Sandip University 250+ Acre Campus Infrastructure" },
];

const paragraph =
  "Outcome-based practical training in advanced laboratories designed with direct input from corporate tech leaders and research organizations, on a lush green campus in Nashik.";

const points = [
  "100+ Hands-On Lab Hours Per Semester",
  "₹5 Crore+ Active Research Funding",
  "250+ Acres Lush Green Campus",
];

export default function WhySandipAndLegacy() {
  const [i, setI] = useState(0);
  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % slides.length);

  return (
    <div id="why-choose-us">
      <section id="why-sandip" className="hp-section hp-bg-stone" aria-labelledby="why-heading">
        <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">Why Sandip University?</p>
          <h2 id="why-heading" className="hp-h2">
            Empowering future leaders <span className="hp-red">with excellence.</span>
          </h2>
        </header>
        <div className="hp-why">
          <div className="hp-why__slider" aria-roledescription="carousel" aria-label="Why Sandip University" data-reveal>
            <img key={i} src={slides[i].image} alt={slides[i].alt} loading="lazy" />
            <div className="hp-why__ctrl">
              <button type="button" className="hp-iconbtn" onClick={prev} aria-label="Previous image">
                <ChevronLeft aria-hidden="true" />
              </button>
              <span className="hp-why__dots" aria-hidden="true">
                {slides.map((s, k) => (
                  <span key={s.image} className={k === i ? "is-active" : undefined} />
                ))}
              </span>
              <button type="button" className="hp-iconbtn" onClick={next} aria-label="Next image">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="hp-why__copy" data-stagger>
            <p className="hp-body">{paragraph}</p>
            <ul className="hp-why__points">
              {points.map((p) => (
                <li key={p}>
                  <CheckCircle2 aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
