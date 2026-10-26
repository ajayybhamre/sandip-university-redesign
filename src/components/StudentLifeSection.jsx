import { Link } from "react-router-dom";
import { Users, Award, Trophy, Rocket, ArrowRight } from "lucide-react";
import campusMainImg from "../assets/images/campus-3.png";
import galleryImg from "../assets/images/gallery1.jpg";
import handsOnImg from "../assets/images/hands-on-training.jpg";


const pillars = [
  {
    icon: Users,
    title: "SUN Clubs & Societies",
    desc: "20+ student-led clubs in robotics, coding, drama, photography, and cultural arts.",
    image: galleryImg,
    alt: "Students at a cultural event on campus",
    caption: "Cultural Fests",
    stat: "50+",
    statLabel: "active clubs",
  },
  {
    icon: Rocket,
    title: "Workshops & Hackathons",
    desc: "Hands-on tech bootcamps, industry guest lectures, and live hackathons.",
    image: handsOnImg,
    alt: "Students in a hands-on training workshop",
    caption: "Tech Labs",
    stat: "24h",
    statLabel: "build-a-thon format",
  },
  {
    icon: Trophy,
    title: "Sports Competitions",
    desc: "Olympic-grade sports complexes, annual inter-collegiate tournaments, and athletics.",
    image: campusMainImg,
    alt: "Sandip University sports and campus grounds",
    caption: "Sports Complex",
    stat: "250+",
    statLabel: "acre eco-campus",
  },
  {
    icon: Award,
    title: "Student Development",
    desc: "Leadership summits, soft skills training, and community welfare programs.",
    image: galleryImg,
    alt: "Students at a leadership summit",
    caption: "Leadership Summits",
    stat: "100%",
    statLabel: "student participation",
  },
];


export default function StudentLifeSection() {
  return (
    <section id="student-life" className="hp-section hp-bg-dark" aria-labelledby="life-heading">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <h2 id="life-heading" className="hp-h2">
            The classroom is <span className="hp-red">only half the campus.</span>
          </h2>
          <p className="hp-lead">
            At Sandip University, learning continues in clubs, labs, hackathons,
            and on the sports field. Pick a pillar below to see what a week
            outside the lecture hall looks like.
          </p>
        </header>

        <ul className="hp-life" data-stagger>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.title} className="hp-life__card">
                <figure className="hp-life__media">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                  <figcaption>{p.caption}</figcaption>
                </figure>
                <div className="hp-life__body">
                  <Icon className="hp-life__icon" aria-hidden="true" />
                  <h3 className="hp-h3">{p.title}</h3>
                  <p className="hp-body">{p.desc}</p>
                  <p className="hp-life__stat">
                    <span className="hp-num">{p.stat}</span>
                    <span>{p.statLabel}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="hp-section__cta" data-reveal>
          <Link to="/campus-life" className="hp-btn hp-btn--white">
            Explore Student Life
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
