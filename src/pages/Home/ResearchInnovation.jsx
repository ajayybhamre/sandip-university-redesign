import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import researchImage from "../../assets/images/research-grants.jpg";
import innovationImage from "../../assets/images/innovation-cell.jpg";

// Figures and wording come from the existing home page content
// (Why Sandip features, at-a-glance numbers, and the Achievements section).
const features = [
  {
    kicker: "Government recognition",
    title: "Awarded Prestigious Research Grants",
    text: "State and central government funding supporting faculty and student innovation projects across artificial intelligence, renewable energy, and bio-engineering.",
    figure: "₹5 Crore+",
    figureLabel: "Active Research Funding",
    image: researchImage,
    alt: "Research grants and innovation projects at Sandip University",
    to: "/research?tab=funding",
    cta: "Funding & Industry",
  },
  {
    kicker: "Incubation hub",
    title: "Dedicated Innovation & Entrepreneurship Cell",
    text: "Empowering student innovators with experienced mentorship, rapid prototyping facilities, patent filing assistance, and early seed funding support.",
    figure: "30+",
    figureLabel: "Student Startups Incubated",
    image: innovationImage,
    alt: "Sandip University Innovation and Startup Incubation Cell",
    to: "/research?tab=cic",
    cta: "Central Instrumentation Center",
  },
];

export default function ResearchInnovation() {
  return (
    <section id="research" className="hp-section hp-bg-paper" aria-labelledby="research-heading">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <div className="hp-head__stack">
            <p className="hp-eyebrow">Research, Innovation &amp; Entrepreneurship</p>
            <h2 id="research-heading" className="hp-h2">
              Where ideas become <span className="hp-red">research and startups.</span>
            </h2>
          </div>
          <p className="hp-lead">
            Funded projects, patents and an incubation cell give students and
            faculty a place to build.
          </p>
        </header>

        <div className="hp-research">
          {features.map((f, i) => (
            <article key={f.title} className={`hp-rfeature${i % 2 ? " is-flip" : ""}`} data-reveal>
              <img src={f.image} alt={f.alt} loading="lazy" />
              <div className="hp-rfeature__body">
                <p className="hp-eyebrow">{f.kicker}</p>
                <h3 className="hp-h3">{f.title}</h3>
                <p className="hp-body">{f.text}</p>
                <p className="hp-rfeature__fig">
                  <span className="hp-num">{f.figure}</span>
                  <span>{f.figureLabel}</span>
                </p>
                <Link to={f.to} className="hp-link">{f.cta}</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="hp-research__foot" data-reveal>
          <p className="hp-meta">
            <span className="hp-num hp-research__pat">120+</span> Patents Filed
          </p>
          <Link to="/research" className="hp-btn hp-btn--primary">
            Explore Research
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
