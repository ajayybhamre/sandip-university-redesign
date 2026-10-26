import leadership from "./leadershipData";

const DEV = import.meta.env.DEV;

function Placeholder({ children }) {
  return DEV ? <div className="hp-placeholder">{children}</div> : null;
}

export default function Leadership() {
  const { vision, mission, values, messages } = leadership;
  const hasAny = vision || mission || values.length || messages.length;
  if (!hasAny && !DEV) return null;

  return (
    <section id="leadership" className="hp-section hp-bg-paper" aria-labelledby="leadership-heading">
      <div className="hp-wrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">Leadership &amp; Vision</p>
          <h2 id="leadership-heading" className="hp-h2">Guided by <span className="hp-red">vision and values.</span></h2>
        </header>

        <div className="hp-vm" data-stagger>
          {vision ? (
            <div><h3 className="hp-h3">Vision</h3><p className="hp-body">{vision}</p></div>
          ) : (
            <Placeholder>Vision statement: add it in leadershipData.js</Placeholder>
          )}
          {mission ? (
            <div><h3 className="hp-h3">Mission</h3><p className="hp-body">{mission}</p></div>
          ) : (
            <Placeholder>Mission statement: add it in leadershipData.js</Placeholder>
          )}
        </div>

        {values.length > 0 && (
          <ul className="hp-chips" aria-label="Institutional values" data-reveal>
            {values.map((v) => <li key={v} className="hp-chip">{v}</li>)}
          </ul>
        )}

        {messages.length > 0 ? (
          <div className="hp-messages" data-stagger>
            {messages.map((m) => (
              <figure key={m.name} className="hp-message">
                {m.photo && <img src={m.photo} alt={`${m.name}, ${m.role}`} loading="lazy" />}
                <blockquote className="hp-body">{m.message}</blockquote>
                <figcaption><strong>{m.name}</strong><span className="hp-meta">{m.role}</span></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <Placeholder>Chancellor and Vice-Chancellor messages: add them in leadershipData.js</Placeholder>
        )}
      </div>
    </section>
  );
}
