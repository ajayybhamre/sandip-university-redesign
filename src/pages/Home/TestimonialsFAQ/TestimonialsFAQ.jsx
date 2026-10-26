import ReviewSlider from "./ReviewSlider";
import FAQ from "./FAQ";

export default function TestimonialsFAQ() {
  return (
    <section className="hp-section hp-bg-stone" aria-labelledby="testimonials-heading">
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">Testimonials &amp; Insights</p>
          <h2 id="testimonials-heading" className="hp-h2">What Our Students Say</h2>
          <p className="hp-lead">
            Discover how our students transformed their careers through
            quality education, practical learning, and industry exposure.
          </p>
        </header>

        <div className="hp-tfaq">
          <div data-reveal>
            <ReviewSlider />
          </div>

          <div data-reveal>
            <p className="hp-eyebrow">FAQ</p>
            <h3 className="hp-h3 hp-tfaq__title">Frequently Asked Questions</h3>
            <p className="hp-meta hp-tfaq__sub">Everything you need to know before taking admission.</p>
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}
