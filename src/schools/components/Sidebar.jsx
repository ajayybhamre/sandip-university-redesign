import { ChevronRight } from "lucide-react";

const Sidebar = ({ sidebarData = [], activeSection, setActiveSection, schoolName = "School" }) => {
  return (
    <aside className="sticky top-24 self-start overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] transition-colors duration-300">
      <div className="border-b border-[var(--line)] px-5 py-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-red-600)]">Explore</p>
        <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-[var(--ink)]">{schoolName}</h2>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">School sections</p>
      </div>

      <div className="flex gap-2 overflow-x-auto p-3 lg:block">
        {sidebarData.map((item) => {
          const Icon = item.icon;

          return (
            <button type="button" key={item.id} onClick={() => setActiveSection(item.id)} className={`flex min-w-max w-full items-center justify-between gap-6 rounded-xl border-l-2 px-4 py-3.5 text-left transition-colors duration-300 ${activeSection === item.id ? "border-[var(--brand-red-600)] bg-[var(--brand-red-50)] text-[var(--ink)] dark:bg-[var(--brand-red-900)]/20" : "border-transparent text-[var(--ink-muted)] hover:border-[var(--brand-red-600)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"}`}>
              <div className="flex items-center gap-3">
                {Icon && <Icon size={18} className="text-[var(--brand-red-600)]" />}
                <span className="font-medium">{item.title}</span>
              </div>

              <ChevronRight size={17} className="text-[var(--brand-red-600)]" />
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
