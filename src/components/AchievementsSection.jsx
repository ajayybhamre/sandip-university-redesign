import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import ashwiniImg from "../assets/images/ashwini.webp";
import gayatriImg from "../assets/images/gayatri.webp";
import pawanImg from "../assets/images/pawan.webp";
import riyaImg from "../assets/images/riya.webp";

import yashswatiImg from "../assets/images/achievers/yashswati-bangar.jpg";
import roshanImg from "../assets/images/achievers/roshan-patil.jpg";
import umeshImg from "../assets/images/achievers/umesh-jadahav.jpg";
import deerajImg from "../assets/images/achievers/deeraj-patil.jpg";
import amolImg from "../assets/images/achievers/amol-rane.jpg";
import sagarImg from "../assets/images/achievers/sagar-kanade.jpg";

const verifiedAchievers = [
  {
    id: "ach-1",
    name: "Ashwini Shinde",
    program: "B.Tech Computer Science & Engg",
    achievement: "University Gold Medalist & Rank 1",
    metric: "9.94 CGPA",
    badge: "Gold Medalist",
    quote: "Sandip University provided me with extraordinary academic guidance and research mentorship that paved the way for top honors.",
    image: ashwiniImg,
    category: "Academic Excellence",
  },
  {
    id: "ach-2",
    name: "Sneha Kulkarni",
    program: "B.Tech CSE",
    achievement: "Software Engineer at Microsoft",
    metric: "32 LPA Package",
    badge: "Microsoft Placement",
    quote: "The intensive hands-on lab training and mock placement drives gave me the confidence to excel in multi-stage technical interviews.",
    image: gayatriImg,
    category: "Tier-1 Placement",
  },
  {
    id: "ach-3",
    name: "Team AI-Shield (Led by Pawan Verma)",
    program: "AI & Data Science",
    achievement: "Smart India Hackathon 2024 Winners",
    metric: "₹1,00,000 Cash Prize",
    badge: "SIH National Champion",
    quote: "Our AI disaster management tool won 1st prize out of 1,200+ national universities, fully backed by Sandip University's Innovation Cell.",
    image: pawanImg,
    category: "National Competition",
  },
  {
    id: "ach-4",
    name: "Riya Gupta",
    program: "BBA Entrepreneurship",
    achievement: "Founded AgriSense Robotics",
    metric: "₹10L Seed Fund",
    badge: "Startup Founder",
    quote: "The SUN Incubation & Innovation Foundation funded our AgriTech startup, giving us space, mentoring, and patent support.",
    image: riyaImg,
    category: "Incubation & Startup",
  },
  { id: "ach-5", name: "Yashswati Bangar", achievement: "General Manager, USA", badge: "Placed Globally", category: "Alumni", image: yashswatiImg },
  { id: "ach-6", name: "Roshan Patil", achievement: "Senior Software Engineer, Germany", badge: "Placed Globally", category: "Alumni", image: roshanImg },
  { id: "ach-7", name: "Umesh Jadahav", achievement: "Engineering Lead, Pune", badge: "Placed Globally", category: "Alumni", image: umeshImg },
  { id: "ach-8", name: "Deeraj Patil", achievement: "Software Engineer, Singapore", badge: "Placed Globally", category: "Alumni", image: deerajImg },
  { id: "ach-9", name: "Amol Rane", achievement: "Area Head, Nashik", badge: "Placed Globally", category: "Alumni", image: amolImg },
  { id: "ach-10", name: "Sagar Kanade", achievement: "Sr. Embedded Software Engineer, Bangalore", badge: "Placed Globally", category: "Alumni", image: sagarImg },
];


const loop = [...verifiedAchievers, ...verifiedAchievers]; // doubled so the marquee never ends

export default function AchievementsSection() {
  return (
    <section
      id="our-achievers"
      aria-label="Our Achievers - Student Success Stories"
      className="hp-section hp-bg-paper"
    >
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">OUR ACHIEVERS</p>
          <h2 className="hp-h2">
            Where Our Students Create <span className="hp-red">Success Stories.</span>
          </h2>
          <p className="hp-lead">
            From securing record-breaking placements at fortune 500 corporations to winning prestigious national hackathons and founding high-impact startups—our students continuously make Sandip University proud.
          </p>
        </header>

        <dl className="hp-metrics" data-reveal>
          <div>
            <dt>Highest International Package</dt>
            <dd className="hp-num">32 LPA</dd>
          </div>
          <div>
            <dt>Top Campus Recruiters</dt>
            <dd className="hp-num">200+</dd>
          </div>
        </dl>
      </div>

      <div className="hp-marquee" data-reveal>
        <ul className="hp-marquee__track" style={{ "--dur": "70s" }} aria-label="Our achievers">
          {loop.map((a, i) => {
            const dup = i >= verifiedAchievers.length;
            return (
              <li key={`${a.id}-${i}`} className="hp-story" aria-hidden={dup ? "true" : undefined} inert={dup ? true : undefined}>
                <figure className="hp-story__media">
                  <img src={a.image} alt={dup ? "" : a.name} loading="lazy" />
                  <figcaption>{a.category}</figcaption>
                </figure>
                <div className="hp-story__body">
                  <p className="hp-achiever__badge">
                    <Star aria-hidden="true" />
                    {a.badge}
                  </p>
                  <h3 className="hp-h3">{a.name}</h3>
                  {a.program && <p className="hp-meta">{a.program}</p>}
                  <p className="hp-achiever__win">{a.achievement}</p>
                  {a.metric && <p className="hp-achiever__metric hp-num">{a.metric}</p>}
                  {a.quote && <blockquote className="hp-body">“{a.quote}”</blockquote>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hp-wrap hp-slider__foot">
        <Link to="/placement" className="hp-btn hp-btn--primary">
          Read More Stories
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
