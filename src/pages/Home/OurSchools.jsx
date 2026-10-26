import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import menuData from "../../components/Header/menuData";

// Read straight from the header menu so the names and routes can never drift apart.
const schools =
  menuData.find((m) => m.title === "Schools")?.sections?.[0]?.links ?? [];

export default function OurSchools() {
  if (!schools.length) return null;

  return (
    <section id="our-schools" className="hp-section hp-bg-paper" aria-labelledby="schools-heading">
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">Our Schools</p>
          <h2 id="schools-heading" className="hp-h2">
            Find the <span className="hp-red">school</span> that fits you.
          </h2>
        </header>

        <ul className="hp-schools" data-stagger>
          {schools.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.path}>
                <Link to={s.path} className="hp-school">
                  <Icon className="hp-school__icon" aria-hidden="true" />
                  <span className="hp-school__name">{s.title.trim()}</span>
                  <ArrowUpRight className="hp-school__go" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
