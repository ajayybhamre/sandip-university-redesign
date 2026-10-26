import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, FileText, MessageCircle, BadgePercent, GraduationCap } from "lucide-react";
import bannerBg from "../assets/images/soet2.webp";

const ctaMetrics = [
  {
    icon: BookOpen,
    number: "100+",
    label: "Programs Offered",
    sub: "UG, PG, Ph.D & Diploma courses",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Active Students",
    sub: "Diverse nationwide campus",
  },
  {
    icon: Award,
    number: "95%+",
    label: "Placement Rate",
    sub: "250+ top corporate recruiters",
  },
];

// A real sequence, so numbering is meaningful. Edit copy to match your admission process.
const journey = [
  {
    icon: FileText,
    title: "Apply online",
    detail:
      "Fill in the application form and upload your marksheets. It takes about 10 minutes.",
  },
  {
    icon: MessageCircle,
    title: "Talk to a counsellor",
    detail:
      "Discuss programs, career paths, and campus life with an admissions counsellor.",
  },
  {
    icon: BadgePercent,
    title: "Check scholarships",
    detail:
      "Your merit and entrance scores are reviewed for scholarships and fee benefits.",
  },
  {
    icon: GraduationCap,
    title: "Confirm your seat",
    detail:
      "Pay the admission fee, submit documents, and receive your enrollment number.",
  },
];

const streams = [
  "Engineering",
  "Computer Science",
  "Management",
  "Pharmacy",
  "Design",
  "Ph.D & Research",
];

export default function CommunityCTA() {
  return (
    <section
      id="community-cta"
      aria-label="Be a Part of Something Bigger"
      className="hp-section hp-bg-stone"
    >
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <h2 className="hp-h2">
            Four steps from here <span className="hp-red">to your first day on campus.</span>
          </h2>
          <p className="hp-lead">
            Admissions at Sandip University are simple and guided. Follow the
            path on the admit card below, or pick a stream to see programs
            first.
          </p>
        </header>

        <ol className="hp-steps" data-stagger>
          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="hp-steps__item">
                <span className="hp-num hp-steps__num">{String(i + 1).padStart(2, "0")}</span>
                <Icon className="hp-steps__icon" aria-hidden="true" />
                <h3 className="hp-h3">{step.title}</h3>
                <p className="hp-body">{step.detail}</p>
              </li>
            );
          })}
        </ol>

        <div className="hp-banner" data-reveal>
          <img className="hp-banner__bg" src={bannerBg} alt="Sandip University Grand Campus" loading="lazy" />
          <div className="hp-banner__shade" />
          <div className="hp-banner__inner">
            <div className="hp-banner__copy">
              <p className="hp-status">
                <span className="hp-status__dot" aria-hidden="true" />
                Admissions open for 2026-27
              </p>
              <h3 className="hp-h2">
                Be a Part of <span className="hp-red">Something Bigger.</span>
              </h3>
              <p className="hp-lead">
                Take the first step towards your academic journey and explore
                world-class programs, global research initiatives, and a
                vibrant campus life at Sandip University.
              </p>
              <p className="hp-meta hp-banner__label">Not sure where to start? Browse by stream</p>
              <ul className="hp-chips hp-chips--flush">
                {streams.map((s) => (
                  <li key={s}>
                    <Link to="/academics" className="hp-chip">{s}</Link>
                  </li>
                ))}
              </ul>
              <div className="hp-banner__actions">
                <Link to="/apply" className="hp-btn hp-btn--primary">
                  Apply Now
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link to="/academics" className="hp-btn hp-btn--glass">
                  Explore Programs
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <dl className="hp-banner__metrics">
              {ctaMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label}>
                    <Icon aria-hidden="true" />
                    <dd className="hp-num">{m.number}</dd>
                    <dt>{m.label}</dt>
                    <dd className="hp-banner__sub">{m.sub}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
