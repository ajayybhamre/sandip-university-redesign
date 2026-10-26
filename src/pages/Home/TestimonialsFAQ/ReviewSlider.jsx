import { useState } from "react";
import { HiStar } from "react-icons/hi2";
import { ChevronLeft, ChevronRight } from "lucide-react";
import reviews from "./reviewData";

// One review at a time, changed by the visitor (no autoplay).
export default function ReviewSlider() {
  const [i, setI] = useState(0);
  const item = reviews[i];
  const prev = () => setI((n) => (n === 0 ? reviews.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % reviews.length);

  return (
    <figure className="hp-review" aria-roledescription="carousel" aria-label="Student testimonials">
      <div className="hp-review__stars" aria-label={`${item.rating} out of 5`}>
        {[...Array(item.rating)].map((_, k) => (
          <HiStar key={k} aria-hidden="true" />
        ))}
      </div>
      <blockquote key={item.id} className="hp-review__text">"{item.review}"</blockquote>
      <figcaption className="hp-review__who">
        <img src={item.image} alt={item.name} />
        <div>
          <p className="hp-review__name">{item.name}</p>
          <p className="hp-meta">{item.designation}</p>
          <p className="hp-review__company">{item.company}</p>
        </div>
      </figcaption>
      <div className="hp-review__ctrl">
        <span className="hp-meta">{i + 1} / {reviews.length}</span>
        <button type="button" className="hp-iconbtn" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" className="hp-iconbtn" onClick={next} aria-label="Next testimonial">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </figure>
  );
}
