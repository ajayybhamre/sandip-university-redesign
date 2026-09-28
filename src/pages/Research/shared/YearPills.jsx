const YearPills = ({ years, active, onSelect }) => (
  <div className="flex flex-wrap gap-2 mb-10">
    {
      years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={`
            px-5 py-2.5 rounded-full text-sm font-semibold transition-all
            ${
              active === year
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }
          `}
        >
          {year}
        </button>
      ))
    }
  </div>
);

export default YearPills;
