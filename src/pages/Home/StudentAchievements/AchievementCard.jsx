import { ArrowUpRight } from "lucide-react";

export default function AchievementCard({ achievement, onSelect }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(achievement);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`View achievement details for ${achievement.title} by ${achievement.studentName}`}
      onClick={() => onSelect(achievement)}
      onKeyDown={handleKeyDown}
      className="hp-acard"
    >
      <div className="hp-acard__media">
        <img
          src={achievement.image}
          alt={achievement.title}
          className={achievement.imagePositionCard || achievement.imagePosition || "object-[center_0%]"}
          loading="lazy"
        />
        <span className="hp-acard__cat">{achievement.category}</span>
        {achievement.metric && <span className="hp-acard__metric">{achievement.metric}</span>}
      </div>

      <div className="hp-acard__body">
        <p className="hp-meta">
          {achievement.badge} · {achievement.date}
        </p>
        <h3 className="hp-h3 hp-acard__title">{achievement.title}</h3>
        <p className="hp-body hp-acard__desc">{achievement.description}</p>

        <div className="hp-acard__foot">
          <div>
            <p className="hp-acard__name">{achievement.studentName}</p>
            <p className="hp-meta">
              {achievement.department} • {achievement.year}
            </p>
          </div>
          <span className="hp-acard__go" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </div>
  );
}
