const PillTabs = ({ tabs, active, onSelect, size = "md" }) => (
  <div className="flex flex-wrap gap-2">
    {
      tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`
            rounded-full font-semibold transition-all
            ${size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"}
            ${
              active === tab
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }
          `}
        >
          {tab}
        </button>
      ))
    }
  </div>
);

export default PillTabs;
