// src/pages/COE/components/COEEmptyState.jsx
//
// Shown when a list is empty. Matters more once this is backend-driven —
// "no notices right now" is a real, expected state, not a bug.

import { Inbox } from "lucide-react";

const COEEmptyState = ({ message = "Nothing published here yet. Check back soon." }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 py-16 text-center">
    <Inbox size={28} className="text-gray-400 dark:text-gray-600" />
    <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
  </div>
);

export default COEEmptyState;
