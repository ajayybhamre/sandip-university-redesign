import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlinePhone } from "react-icons/hi2";

export default function SocialMedia() {
  return (
    <section id="admissions-cta" className="hp-section hp-bg-paper" aria-labelledby="final-cta-heading">
      <div className="hp-wrap">
        <div className="hp-final hp-bg-red" data-reveal>
          <div className="hp-final__copy">
            <p className="hp-status">
              <span className="hp-status__dot" aria-hidden="true" />
              Admissions open 2026-27
            </p>
            <h2 id="final-cta-heading" className="hp-h2">
              Ready to shape your future at Sandip University?
            </h2>
            <p className="hp-lead">
              Join thousands of students on a transformative journey, with
              world-class infrastructure and dedicated placement support.
              Here is exactly how your admission works.
            </p>
          </div>
          <div className="hp-final__actions">
            <Link to="/apply" className="hp-btn hp-btn--white">
              Apply Now
              <HiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="hp-btn hp-btn--outline-light">
              <HiOutlinePhone aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
