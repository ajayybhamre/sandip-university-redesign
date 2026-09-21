import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Shown when a programme has no content file yet, instead of invented placeholder sections.
export default function ProgrammeEmptyState({ programme }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-8 md:p-12">
      <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--ink)] md:text-3xl">
        Details for {programme.title} are being added
      </h2>
      <p className="mt-4 max-w-2xl leading-8 text-[var(--ink-muted)]">
        The syllabus, outcomes, fees and career information for this programme will appear here. For anything you need now, our admissions team can help.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-navy)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red-600)]"
      >
        Contact admissions <ArrowRight size={17} />
      </Link>
    </div>
  );
}
