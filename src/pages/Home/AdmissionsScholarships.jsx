import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";

const levels = [
  { title: "Undergraduate", text: "Explore the undergraduate programs and apply for 2026-27.", to: "/programs" },
  { title: "Postgraduate", text: "Explore the postgraduate programs and apply for 2026-27.", to: "/postgraduate" },
  { title: "Doctoral (Ph.D)", text: "Read about Ph.D. admission and how to apply.", to: "/phd/admission" },
];

const resources = [
  { title: "Eligibility", to: "/eligibility" },
  { title: "Admission Process", to: "/admission-process" },
  { title: "Scholarships", to: "/scholarships" },
  { title: "Fee Structure", to: "/fee-structure" },
  { title: "Document List", to: "/documents" },
  { title: "Help Centre", to: "/help" },
];

/*
  IMPORTANT DATES: fill this in with the official 2026-27 dates, for example
    { label: "Applications close", date: "30 June 2026" }
  Nothing is shown until real dates are added, so no date is ever invented.
*/
const importantDates = [];

export default function AdmissionsScholarships() {
  return (
    <section id="admissions" className="hp-section hp-bg-paper" aria-labelledby="admissions-heading">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <div className="hp-head__stack">
            <p className="hp-eyebrow">Admissions &amp; Scholarships</p>
            <h2 id="admissions-heading" className="hp-h2">
              Admissions are <span className="hp-red">open for 2026-27.</span>
            </h2>
          </div>
          <p className="hp-lead">
            Choose your level, check eligibility, and apply online. Scholarship
            details are on the Scholarships page.
          </p>
        </header>

        <ul className="hp-levels" data-stagger>
          {levels.map((l) => (
            <li key={l.title}>
              <Link to={l.to} className="hp-level">
                <h3 className="hp-h3">{l.title}</h3>
                <p className="hp-body">{l.text}</p>
                <span className="hp-level__go">
                  Learn more <ArrowRight aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hp-adm">
          <div data-reveal>
            <h3 className="hp-h3">Plan your application</h3>
            <ul className="hp-reslist">
              {resources.map((r) => (
                <li key={r.title}>
                  <Link to={r.to}>
                    {r.title}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {importantDates.length > 0 ? (
            <div className="hp-dates" data-reveal>
              <h3 className="hp-h3"><CalendarDays aria-hidden="true" /> Important dates</h3>
              <dl>
                {importantDates.map((d) => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.date}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : (
            <div className="hp-dates" data-reveal>
              <h3 className="hp-h3"><CalendarDays aria-hidden="true" /> Important dates</h3>
              <p className="hp-body">
                See the academic calendar for the latest dates.
              </p>
              <Link to="/academics/calendar" className="hp-link">Open academic calendar</Link>
            </div>
          )}
        </div>

        <div className="hp-section__cta" data-reveal>
          <Link to="/apply" className="hp-btn hp-btn--primary">
            Apply Now
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
