import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import news from "./newsData";

export default function NewsEvents() {
  if (!news.length) return null;
  const [featured, ...rest] = news;

  return (
    <section id="news" className="hp-section hp-bg-paper" aria-labelledby="news-heading">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <div className="hp-head__stack">
            <p className="hp-eyebrow">Latest News</p>
            <h2 id="news-heading" className="hp-h2">Campus <span className="hp-red">Highlights</span></h2>
          </div>
          <div className="hp-head__side">
            <Link to="/events" className="hp-link">View All →</Link>
          </div>
        </header>

        <div className="hp-news2">
          <Link to={featured.to} className={`hp-newsfeat${featured.urgent ? " is-urgent" : ""}`} data-reveal>
            <span className="hp-newsfeat__date">
              <span className="hp-num">{featured.day}</span>
              <span>{featured.month}</span>
            </span>
            <span className="hp-newsfeat__body">
              <span className="hp-tag">{featured.urgent ? "Notice" : featured.category}</span>
              <h3 className="hp-h3">{featured.title}</h3>
              <span className="hp-body">{featured.text}</span>
              <span className="hp-level__go">Read more <ArrowRight aria-hidden="true" /></span>
            </span>
          </Link>

          <ul className="hp-newslist" data-stagger>
            {rest.map((n) => (
              <li key={n.title}>
                <Link to={n.to} className={`hp-newsitem${n.urgent ? " is-urgent" : ""}`}>
                  <span className="hp-news__date">
                    <span className="hp-num">{n.day}</span>
                    <span>{n.month}</span>
                  </span>
                  <span>
                    <span className="hp-tag">{n.urgent ? "Notice" : n.category}</span>
                    <h3 className="hp-newsitem__title">{n.title}</h3>
                    <span className="hp-meta">{n.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
