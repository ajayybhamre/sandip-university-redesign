import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { achievementsData, CATEGORIES } from "./achievementsData";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";

const CARDS_PER_PAGE = 3;

export default function StudentAchievements() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredAchievements = useMemo(() => {
    if (activeTab === "all") return achievementsData;
    return achievementsData.filter((item) => item.categorySlug === activeTab);
  }, [activeTab]);

  // Count per category, used by the podium filter
  const counts = useMemo(() => {
    const map = { all: achievementsData.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== "all") {
        map[cat.id] = achievementsData.filter((i) => i.categorySlug === cat.id).length;
      }
    });
    return map;
  }, []);

  const handleTabChange = (categorySlug) => {
    setActiveTab(categorySlug);
    setCarouselIndex(0);
  };

  const maxPages = Math.max(1, Math.ceil(filteredAchievements.length / CARDS_PER_PAGE));
  const handlePrev = () => setCarouselIndex((p) => (p === 0 ? maxPages - 1 : p - 1));
  const handleNext = () => setCarouselIndex((p) => (p >= maxPages - 1 ? 0 : p + 1));

  const visibleAchievements = filteredAchievements.slice(
    carouselIndex * CARDS_PER_PAGE,
    carouselIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
  );


  return (
    <section id="student-achievements" aria-labelledby="achievements-heading" className="hp-section hp-bg-stone">
      <div className="hp-wrap">
        <header className="hp-head hp-head--split" data-reveal>
          <div className="hp-head__stack">
            <h2 id="achievements-heading" className="hp-h2">
              Student Achievements <span className="hp-red">where hard work gets its moment.</span>
            </h2>
            <p className="hp-lead">
              Celebrating the talent, dedication, and success of our students.
              Choose a column on the podium to see the wins in that category.
            </p>
          </div>
        </header>

        <div role="tablist" aria-label="Achievement categories" className="hp-tabs" data-reveal>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls="achievements-grid"
              onClick={() => handleTabChange(cat.id)}
              className={`hp-chip${activeTab === cat.id ? " is-active" : ""}`}
            >
              {cat.name}
              <span className="hp-tabs__count">{counts[cat.id] ?? 0}</span>
            </button>
          ))}
        </div>

        {filteredAchievements.length > 0 ? (
          <div id="achievements-grid" role="tabpanel" key={`${activeTab}-${carouselIndex}`} className="hp-agrid">
            {visibleAchievements.map((item, index) => (
              <AchievementCard
                key={item.id}
                achievement={item}
                index={index}
                onSelect={(selected) => setSelectedAchievement(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="hp-empty">
            <Filter aria-hidden="true" />
            <h3 className="hp-h3">No achievements in this category yet</h3>
            <p className="hp-meta">Pick another podium column to see verified student accomplishments.</p>
            <button onClick={() => handleTabChange("all")} className="hp-btn hp-btn--primary">
              Show all categories
            </button>
          </div>
        )}

        <div className="hp-pager">
          <button onClick={() => handleTabChange("all")} className="hp-link">
            Explore all achievements
          </button>
          {maxPages > 1 && (
            <div className="hp-pager__ctrl">
              <span className="hp-meta">{carouselIndex + 1} / {maxPages}</span>
              <button onClick={handlePrev} aria-label="Previous page" className="hp-iconbtn">
                <ChevronLeft aria-hidden="true" />
              </button>
              <button onClick={handleNext} aria-label="Next page" className="hp-iconbtn">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedAchievement && (
        <AchievementModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />
      )}
    </section>
  );
}
