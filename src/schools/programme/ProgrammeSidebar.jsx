import { ChevronRight } from "lucide-react";

// Left-hand list of sections. On small screens it becomes a horizontal, scrollable strip.
export default function ProgrammeSidebar({ sections, activeId, onSelect, title = "Programme", subtitle = "Programme sections" }) {
  return (
    <aside className="sticky top-24 self-start overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] transition-colors duration-300">
      <div className="border-b border-[var(--line)] px-5 py-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-red-600)]">Explore</p>
        <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-[var(--ink)]">{title}</h2>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">{subtitle}</p>
      </div>

      <nav aria-label="Programme sections" className="flex gap-2 overflow-x-auto p-3 lg:block">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = section.id === activeId;

          return (
            <button
              type="button"
              key={section.id}
              onClick={() => onSelect(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-w-max w-full items-center justify-between gap-6 rounded-xl border-l-2 px-4 py-3.5 text-left transition-colors duration-300 ${
                isActive
                  ? "border-[var(--brand-red-600)] bg-[var(--brand-red-50)] text-[var(--ink)] dark:bg-[var(--brand-red-900)]/20"
                  : "border-transparent text-[var(--ink-muted)] hover:border-[var(--brand-red-600)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
              }`}
            >
              <span className="flex items-center gap-3">
                {Icon && <Icon size={18} className="text-[var(--brand-red-600)]" />}
                <span className="font-medium">{section.title}</span>
              </span>
              <ChevronRight size={17} className="text-[var(--brand-red-600)]" />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
