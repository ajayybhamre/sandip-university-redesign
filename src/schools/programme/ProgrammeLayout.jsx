// Part 2 of the page: the sidebar on the left and the active section on the right.
//
// The active section lives in the URL hash (…/aerospace-engineering#fees), so:
//   * every section can be linked to directly,
//   * the browser back button and refresh behave,
//   * nothing is left over when the visitor moves to another programme.

import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProgrammeEmptyState from "./ProgrammeEmptyState";
import ProgrammeSidebar from "./ProgrammeSidebar";

export default function ProgrammeLayout({ programme, sections, sidebarTitle, sidebarSubtitle }) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const panelRef = useRef(null);
  const isFirstRender = useRef(true);

  const activeSection = sections.find((section) => section.id === hash.slice(1)) || sections[0];
  const activeId = activeSection?.id;

  const selectSection = (id) => navigate({ pathname, hash: `#${id}` }, { replace: true });

  // When a long section is replaced by another one, bring the top of the panel back into view.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const panel = panelRef.current;
    if (panel && panel.getBoundingClientRect().top < 0) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeId]);

  const ActiveComponent = activeSection?.Component;

  return (
    <section className="bg-[var(--surface)] pb-20 pt-10 transition-colors duration-300 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        {ActiveComponent ? (
          <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <ProgrammeSidebar
              sections={sections}
              activeId={activeId}
              onSelect={selectSection}
              title={sidebarTitle}
              subtitle={sidebarSubtitle}
            />
            <div
              ref={panelRef}
              className="min-h-[700px] scroll-mt-28 rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-6 md:p-10"
            >
              <ActiveComponent data={activeSection.data} title={activeSection.title} programme={programme} />
            </div>
          </div>
        ) : (
          <ProgrammeEmptyState programme={programme} />
        )}
      </div>
    </section>
  );
}
