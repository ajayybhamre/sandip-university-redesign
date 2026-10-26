import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import GlanceStats from "./GlanceStats";
import campusImage from "../../assets/images/about-entrance.jpg";

export default function AboutSandipUniversity() {
  return (
    <section className="hp-section hp-bg-paper" aria-labelledby="about-heading">
      <div className="hp-wrap hp-about">
        <div className="hp-about__copy">
          <p className="hp-eyebrow" data-reveal>ABOUT SANDIP UNIVERSITY</p>
          <h2 id="about-heading" className="hp-h2" data-reveal>
            <span className="hp-red">SANDIP</span> UNIVERSITY
          </h2>

          <div className="hp-about__text" data-stagger>
            <p className="hp-body">
              Study at a state of the art campus located in the lap of nature. Sandip University’s 250+ acre campus is a global hub of cutting-edge education and dynamic student development. Since its inception in 2017, Sandip University has created a positive and futuristic hub of education. Our values are steeped in providing various industries with top-notch talent in terms of academic knowledge and hands-on skills.
            </p>
            <p className="hp-body">
              Our students are trained to become global leaders rather than followers. Sandip University’s educational programmes are designed to be in sync with Education 4.0 and Industry 4.0, while paving the way for Education 5.0 and Industry 5.0.
            </p>
            <p className="hp-body">
              Sandip University’s faculty members are pioneers and groundbreaking seekers of innovative ideas, constantly pushing for invigorating excellence from our students. They are well-read and well-qualified professors holding qualifications from IITs, NITs and IIMs across India. Their extensive experience in the teaching industry has honed their skills to the hilt, making them talented academic researchers in their respective industries.
            </p>
          </div>

          <div data-reveal>
            <Link to="/about" className="hp-btn hp-btn--primary">
              Learn More About Us
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <figure className="hp-about__figure" data-reveal>
          <img src={campusImage} alt="Sandip University Campus" loading="lazy" />
        </figure>
      </div>
      <div className="hp-wrap hp-about__stats">
        <GlanceStats />
      </div>
    </section>
  );
}
