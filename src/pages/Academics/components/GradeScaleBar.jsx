// Full class strings (not built dynamically) so Tailwind's compiler can find them.
const intensityClasses = [
  "bg-red-600/15",
  "bg-red-600/30",
  "bg-red-600/40",
  "bg-red-600/50",
  "bg-red-600/60",
  "bg-red-600/75",
  "bg-red-600/90",
  "bg-red-600",
];

export default function GradeScaleBar({ rows }) {
  return (
    <div aria-hidden="true" className="mb-6">
      <div className="flex h-2 w-full overflow-hidden rounded-full">
        {rows.map((row, index) => (
          <div
            key={row.grade}
            className={`h-full flex-1 ${intensityClasses[index] ?? "bg-red-600"}`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>Reappear / Absent</span>
        <span>Outstanding</span>
      </div>
    </div>
  );
}
