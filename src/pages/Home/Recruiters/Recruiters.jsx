import recruiters from "./recruiterData";

// Repeat the list so each half of the track is always wider than the screen
const MIN_PER_HALF = 10;
const reps = Math.max(1, Math.ceil(MIN_PER_HALF / Math.max(recruiters.length, 1)));
const half = Array.from({ length: reps }).flatMap(() => recruiters);
const track = [...half, ...half];

export default function Recruiters() {
  return (
    <section id="recruiters" aria-labelledby="recruiters-heading" className="hp-section hp-bg-stone">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <h2 id="recruiters-heading" className="hp-h2">
            Our students work with <span className="hp-red">industry leaders.</span>
          </h2>
          <p className="hp-lead">
            Leading national and global companies recruit Sandip University
            graduates every year.
          </p>
        </header>
      </div>

      <div className="hp-logos" data-reveal>
        <div className="hp-logos__track">
          {track.map((logo, i) => (
            <div key={i} className="hp-logos__item" aria-hidden={i >= track.length / 2 ? "true" : undefined}>
              <img
                src={logo}
                alt={i < track.length / 2 ? "Recruiting partner logo" : ""}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
