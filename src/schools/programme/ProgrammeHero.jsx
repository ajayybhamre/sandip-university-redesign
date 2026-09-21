// Part 1 of the page: the banner at the top plus a strip of quick facts.
//
// Optional hero data in the programme file:
//   hero: {
//     tagline: "One line shown under the title (defaults to the department description).",
//     image: bannerImage,                       // imported image; defaults to the site banner
//     facts: [{ label: "Duration", value: "4 Years" }, { label: "Intake", value: "120" }],
//   }
// Level, School and Department are added automatically.

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import defaultBanner from "../../assets/images/slider2.webp";

function getFacts(programme) {
  const facts = [
    { label: "Level", value: programme.level },
    { label: "School", value: programme.schoolName },
    { label: "Department", value: programme.departmentName },
    ...(programme.content?.hero?.facts || []),
  ];
  return facts.filter((fact) => fact.value);
}

export default function ProgrammeHero({ programme }) {
  const hero = programme.content?.hero || {};
  const description = hero.tagline || programme.departmentDescription || `Explore this programme at ${programme.schoolName}.`;
  const facts = getFacts(programme);

  return (
    <>
      <Breadcrumb
        badge={`${programme.schoolName} · PROGRAMME`}
        title={programme.title}
        description={description}
        currentPage={programme.title}
        image={hero.image || defaultBanner}
        showBadge={false}
        showTrail={false}
      />

      {facts.length > 0 && (
        <section className="bg-[var(--surface)] pt-12 transition-colors duration-300 md:pt-16">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
            <dl className="flex flex-wrap gap-4">
              {facts.map((fact, index) => (
                <div key={`${index}-${fact.label}`} className="grow basis-[220px] rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">{fact.label}</dt>
                  <dd className="mt-2 font-[var(--font-display)] text-lg font-bold leading-snug text-[var(--ink)]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </>
  );
}