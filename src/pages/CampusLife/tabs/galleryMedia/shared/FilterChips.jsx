const FilterChips = ({ filters, activeFilter, setActiveFilter }) => (

  <div className="
    flex
    flex-wrap
    gap-2
    mb-8
  ">

    {
      filters.map((filter) => (

        <button

          key={filter.id}

          onClick={() => setActiveFilter(filter.id)}

          className={`
            whitespace-nowrap
            px-4
            py-2
            rounded-full
            text-xs
            sm:text-sm
            font-semibold
            border
            transition-all

            ${
              activeFilter === filter.id
              ?
              "bg-red-600 border-red-600 text-white shadow-md"
              :
              "bg-transparent border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:border-red-300 hover:text-red-600"
            }
          `}
        >

          {filter.label}

        </button>

      ))
    }

  </div>

);

export default FilterChips;
