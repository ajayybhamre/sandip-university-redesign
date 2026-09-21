import { PenLine } from "lucide-react";

export default function PlaceholderNote({ children }) {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-xl border border-dashed border-gray-300 px-4 py-3 text-xs leading-5 text-gray-500 dark:border-gray-700 dark:text-gray-500">
      <PenLine size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
