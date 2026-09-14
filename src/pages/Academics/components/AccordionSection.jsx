import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `accordion-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="rounded-xl border border-gray-200 dark:border-gray-800">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:text-white"
        >
          {title}
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-red-600" : ""}`}
          />
        </button>
      </h3>
      {isOpen && (
        <div id={panelId} className="px-5 pb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {children}
        </div>
      )}
    </section>
  );
}
